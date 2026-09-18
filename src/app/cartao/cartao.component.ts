import { Component } from '@angular/core';

@Component({
  selector: 'app-cartao',
  imports: [],
  templateUrl: './cartao.component.html',
  styleUrl: './cartao.component.css'
})
export class CartaoComponent {

  // Conversão Google Ads — clique no WhatsApp
  private trackGoogleAds(): void {
    if (typeof (window as any).gtag === 'function') {
      (window as any).gtag('event', 'conversion', { send_to: 'AW-17838804791/RLcQCOyEw_wcELeemrpC' });
    }
  }

  // Pixel do Facebook (opcional) — mesmo ID usado no site principal
  private trackFacebookPixel(eventName: string): void {
    if (typeof (window as any).fbq === 'function') {
      (window as any).fbq('track', 'Lead', { content_name: 'Cartão Digital', content_category: eventName });
    }
  }

  trackWhatsappClick(): void {
    this.trackGoogleAds();
    this.trackFacebookPixel('WhatsApp');
  }

  trackCallClick(): void {
    this.trackFacebookPixel('Ligar');
  }

  trackSiteClick(): void {
    this.trackFacebookPixel('Site');
  }

  trackInstagramClick(): void {
    this.trackFacebookPixel('Instagram');
  }

  trackEmailClick(): void {
    this.trackFacebookPixel('Email');
  }
}
