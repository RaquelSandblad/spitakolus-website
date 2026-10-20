// =============================================================================
// SUPPORT CLIENT (Spitakolus-webb)
// =============================================================================
//
// Postar support-ärenden till det delade support-system (Supabase) som också
// används av Flocken och Nästa Hem. Ärenden taggas med APP_NAME = 'spitakolus'
// så de kan filtreras separat i MCP-verktygen (list_issues, respond_to_issue).
//
// Endast INSERT via anon-key. Svarsflödet hanteras i support-system.
// =============================================================================

import { createClient } from '@supabase/supabase-js';

const SUPPORT_SUPABASE_URL = 'https://kgtopebjrrfnvbvytisz.supabase.co';
const SUPPORT_SUPABASE_ANON_KEY =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtndG9wZWJqcnJmbnZidnl0aXN6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzA5MzMzODEsImV4cCI6MjA4NjUwOTM4MX0.l00Q7qj-mYIgb4aKPKgagRSsVMUHXAfGOh7i9wAN5lY';

const APP_NAME = 'spitakolus';

interface DeviceInfo {
  platform: string;
  user_agent: string | null;
  screen_width: number | null;
  screen_height: number | null;
}

export interface SubmitIssueParams {
  description: string;
  userEmail?: string;
  userName?: string;
}

export interface SubmitIssueResult {
  success: boolean;
  error?: string;
}

class SupportClient {
  private supabase;
  private appId: string | null = null;

  constructor() {
    this.supabase = createClient(SUPPORT_SUPABASE_URL, SUPPORT_SUPABASE_ANON_KEY);
  }

  private getDeviceInfo(): DeviceInfo {
    if (typeof window === 'undefined') {
      return {
        platform: 'server',
        user_agent: null,
        screen_width: null,
        screen_height: null,
      };
    }

    return {
      platform: 'web',
      user_agent: navigator.userAgent,
      screen_width: window.screen.width,
      screen_height: window.screen.height,
    };
  }

  private async getAppId(): Promise<string> {
    if (this.appId) return this.appId;

    const { data, error } = await this.supabase
      .from('apps')
      .select('id')
      .eq('name', APP_NAME)
      .single();

    if (error || !data) {
      throw new Error(`App '${APP_NAME}' not found in support system`);
    }

    this.appId = data.id;
    return data.id;
  }

  async submitIssue(params: SubmitIssueParams): Promise<SubmitIssueResult> {
    try {
      const appId = await this.getAppId();
      const deviceInfo = this.getDeviceInfo();

      const { error } = await this.supabase.from('issues').insert({
        app_id: appId,
        description: params.description,
        user_email: params.userEmail,
        user_name: params.userName,
        device_info: deviceInfo,
      });

      if (error) {
        console.error('Error submitting issue:', error);
        return { success: false, error: error.message };
      }

      return { success: true };
    } catch (err) {
      console.error('Error submitting issue:', err);
      return {
        success: false,
        error: err instanceof Error ? err.message : 'Unknown error',
      };
    }
  }
}

export const supportClient = new SupportClient();
export const submitIssue = (params: SubmitIssueParams) => supportClient.submitIssue(params);
