'use client';

import Image from 'next/image';
import { Suspense, useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'next/navigation';

const IPHONE_URL = 'https://app.flocken.info';
const PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=com.bastavan.app';

function FlockenResetContent() {
  const searchParams = useSearchParams();
  const tokenHash = searchParams.get('token_hash') ?? '';
  const typeParam = searchParams.get('type') ?? '';

  const [isMobile, setIsMobile] = useState(false);
  const [clientReady, setClientReady] = useState(false);
  const [qrDataUrl, setQrDataUrl] = useState('');
  const [autoLaunchAttempted, setAutoLaunchAttempted] = useState(false);

  const hasValidPayload = tokenHash.length > 0 && typeParam;

  const deepLink = useMemo(() => {
    if (!hasValidPayload) return '';
    return `parahund://auth/confirm?token_hash=${tokenHash}&type=${typeParam}`;
  }, [hasValidPayload, tokenHash, typeParam]);

  useEffect(() => {
    setClientReady(true);
    setIsMobile(/iPhone|iPad|iPod|Android/i.test(navigator.userAgent));
  }, []);

  useEffect(() => {
    if (!clientReady || !deepLink || !isMobile || autoLaunchAttempted) {
      return;
    }

    const timer = setTimeout(() => {
      window.location.href = deepLink;
      setAutoLaunchAttempted(true);
    }, 800);

    return () => clearTimeout(timer);
  }, [clientReady, deepLink, isMobile, autoLaunchAttempted]);

  useEffect(() => {
    if (!clientReady || !deepLink || isMobile) {
      return;
    }

    let cancelled = false;

    async function generateQr() {
      const QR = await import('qrcode');
      if (cancelled) return;
      try {
        const url = await QR.toDataURL(deepLink, { 
          width: 200, 
          margin: 2,
          color: {
            dark: '#6B7A3A',
            light: '#E8DCC0'
          }
        });
        if (!cancelled) {
          setQrDataUrl(url);
        }
      } catch (err) {
        console.error('QR-code generation failed', err);
      }
    }

    generateQr();

    return () => {
      cancelled = true;
    };
  }, [clientReady, deepLink, isMobile]);

  const renderInvalidState = () => (
    <div className="mt-8 rounded-xl bg-white/90 p-6 text-center text-[#3E3B32] shadow-lg">
      <h2 className="text-2xl font-semibold text-[#6B7A3A]">Flocken</h2>
      <p className="mt-4 leading-relaxed">
        Ogiltig länk. Kontrollera att du använder den fullständiga länken från ditt email.
      </p>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#f8f9fa] px-5 py-5 text-[#3E3B32]" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Arial, sans-serif' }}>
      <div className="mx-auto w-full max-w-[600px] rounded-2xl bg-white p-10 shadow-[0_4px_20px_rgba(0,0,0,0.1)]">
        <Image 
          src="/flocken-logo.png" 
          alt="Flocken" 
          width={80}
          height={80}
          className="mx-auto mb-5 block h-20 w-20 rounded-full" 
        />
        <h1 className="mb-2.5 text-center text-[32px] font-normal text-[#6B7A3A]">Flocken</h1>
        <p className="mb-10 text-center text-[#718096]">Återställ ditt lösenord</p>

        {!hasValidPayload && renderInvalidState()}

        {hasValidPayload && clientReady && isMobile && (
          <div>
            <p className="mb-8 text-center">
              Klicka på knappen nedan för att öppna Flocken och återställa ditt lösenord.
            </p>
            
            <a
              href={deepLink}
              className="mx-auto mt-5 block max-w-[300px] rounded-xl bg-gradient-to-br from-[#6B7A3A] to-[#8BA45D] px-6 py-4 text-center text-base font-semibold text-white shadow-[0_4px_12px_rgba(107,122,58,0.3)] transition-all hover:-translate-y-0.5 hover:shadow-[0_6px_16px_rgba(107,122,58,0.4)]"
            >
              Öppna Flocken-appen
            </a>

            <div className="mt-10 rounded-xl bg-[#E8DCC0] p-5">
              <p className="mb-2.5 text-center text-sm font-bold text-[#3E3B32]">Fungerar inte knappen?</p>
              <p className="mb-0 text-center text-xs text-[#718096]">
                Kopiera denna länk och öppna den i Safari eller Chrome:
              </p>
              <p className="mt-2.5 break-all text-center font-mono text-[11px] text-[#6B7A3A]">
                {deepLink}
              </p>
            </div>
          </div>
        )}

        {hasValidPayload && clientReady && !isMobile && (
          <div>
            <p className="mb-8 text-center">
              För att återställa ditt Flocken-lösenord behöver du öppna länken i Flocken-appen på din telefon.
            </p>

            <p className="my-10 text-center font-semibold">Har du inte Flocken än?</p>

            <div className="my-8 flex justify-center gap-4">
              <a
                href={IPHONE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="max-w-[200px] flex-1 rounded-lg bg-[#3E3B32] px-5 py-3 text-center text-sm text-white transition-all hover:bg-[#6B7A3A]"
              >
                📱 iPhone
              </a>
              <a
                href={PLAY_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="max-w-[200px] flex-1 rounded-lg bg-[#3E3B32] px-5 py-3 text-center text-sm text-white transition-all hover:bg-[#6B7A3A]"
              >
                📱 Android
              </a>
            </div>

            <div className="my-10 rounded-xl bg-[#E8DCC0] p-5 text-center">
              <p className="mb-5 font-semibold">Eller skanna med din telefon:</p>
              {qrDataUrl ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={qrDataUrl} alt="QR-kod" className="mx-auto h-[200px] w-[200px]" />
              ) : (
                <p className="text-sm text-[#999]">Kunde inte generera QR-kod. Använd länkarna ovan.</p>
              )}
            </div>
          </div>
        )}

        <div className="mt-[60px] border-t border-[#e9ecef] pt-8 text-center text-sm text-[#718096]">
          <p><strong>Flocken</strong> – För ett bättre liv som hund</p>
          <p className="my-2.5 text-xs text-[#999]">© 2025 Spitakolus AB</p>
          <p className="text-xs">
            <a href="https://spitakolus.com/flocken-integritetspolicy" className="text-[#6B7A3A] no-underline hover:underline">
              Integritetspolicy
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default function FlockenResetPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-[#f8f9fa] flex items-center justify-center">
        <div className="text-center">
          <Image 
            src="/flocken-logo.png" 
            alt="Flocken" 
            width={60}
            height={60}
            className="mx-auto mb-4 h-15 w-15 rounded-full" 
          />
          <p className="text-[#6B7A3A]">Laddar...</p>
        </div>
      </div>
    }>
      <FlockenResetContent />
    </Suspense>
  );
}
