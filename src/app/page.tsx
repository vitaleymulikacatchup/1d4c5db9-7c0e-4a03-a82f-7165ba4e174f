"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import AboutPhoneTimeline from '@/components/sections/about/AboutPhoneTimeline';
import FeatureCardNine from '@/components/sections/feature/FeatureCardNine';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import TestimonialCardThree from '@/components/sections/testimonial/TestimonialCardThree';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import ContactInline from '@/components/sections/contact/ContactInline';
import FooterBaseSocial from '@/components/sections/footer/FooterBaseSocial';
import { Award, Heart, HelpCircle, Instagram, Facebook, Twitter, Sparkles, Star } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="background-highlight"
      borderRadius="soft"
      contentWidth="large"
      sizing="mediumSizeExtraLargeTitles"
      background="radialGradient"
      cardStyle="gradient-radial"
      primaryButtonStyle="neon-glow-border"
      secondaryButtonStyle="glass"
      headingFontWeight="semibold"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          brandName="StyleHub"
          navItems={[
            { name: "Home", id: "hero" },
            { name: "Collections", id: "collections" },
            { name: "Shop", id: "products" },
            { name: "About", id: "about" },
            { name: "Contact", id: "contact" }
          ]}
          button={{
            text: "Shop Now",
            href: "#products"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboard
          title="Discover Your Style"
          description="Explore our curated collection of premium clothing designed for every occasion. From casual everyday wear to sophisticated evening pieces, find your perfect look."
          tag="New Collection"
          tagIcon={Sparkles}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34yEatLQt6B9A82mZgfqKsKaLO9/uploaded-1765380650268-z8f9e37g.jpg"
          imageAlt="Featured clothing collection"
          frameStyle="card"
          buttons={[
            { text: "Shop Now", href: "#products" },
            { text: "Browse Collection", href: "#collections" }
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <AboutPhoneTimeline
          title="About StyleHub"
          description="We believe fashion should be accessible, sustainable, and expressive. Our mission is to provide high-quality clothing that helps you feel confident and authentic in every moment."
          tag="Our Story"
          tagIcon={Heart}
          textboxLayout="default"
          phoneOne={{
            imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34yEatLQt6B9A82mZgfqKsKaLO9/uploaded-1765379344438-9tllsx9o.jpg"
          }}
          phoneTwo={{
            imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34yEatLQt6B9A82mZgfqKsKaLO9/uploaded-1765379338257-tuxxejce.jpg"
          }}
          useInvertedBackground="noInvert"
          buttons={[
            { text: "Learn More", href: "#" }
          ]}
        />
      </div>

      <div id="collections" data-section="collections">
        <FeatureCardNine
          title="Featured Collections"
          description="Explore our handpicked collections designed to match every style and season."
          tag="Collections"
          tagIcon={Sparkles}
          textboxLayout="default"
          showStepNumbers={false}
          useInvertedBackground="noInvert"
          features={[
            {
              id: 1,
              title: "Summer Essentials",
              description: "Light, breathable fabrics perfect for warm weather. From flowing sundresses to casual linen shirts.",
              phoneOne: {
                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34yEatLQt6B9A82mZgfqKsKaLO9/uploaded-1765379339824-fb5nlivy.jpg"
              },
              phoneTwo: {
                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34yEatLQt6B9A82mZgfqKsKaLO9/uploaded-1765379340931-vxn2j8dl.jpg"
              }
            },
            {
              id: 2,
              title: "Winter Warmth",
              description: "Cozy and stylish pieces for the cold season. Premium jackets, sweaters, and layering options.",
              phoneOne: {
                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34yEatLQt6B9A82mZgfqKsKaLO9/uploaded-1765379342087-vppa57nw.jpg"
              },
              phoneTwo: {
                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34yEatLQt6B9A82mZgfqKsKaLO9/uploaded-1765379343260-1h1k53w0.jpg"
              }
            }
          ]}
        />
      </div>

      <div id="products" data-section="products">
        <ProductCardTwo
          title="Shop Our Collection"
          description="Discover premium clothing pieces selected for quality, style, and comfort. Each item is curated to help you express your unique fashion sense."
          tag="Featured"
          tagIcon={Award}
          textboxLayout="default"
          animationType="slide-up"
          containerStyle="default"
          gridVariant="four-items-2x2-alternating-heights"
          useInvertedBackground="noInvert"
          products={[
            {
              id: "1",
              brand: "StyleHub",
              name: "Premium Silk Blouse",
              price: "$89.99",
              rating: 5,
              reviewCount: "234",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34yEatLQt6B9A82mZgfqKsKaLO9/uploaded-1765379339824-fb5nlivy.jpg",
              imageAlt: "Premium silk blouse"
            },
            {
              id: "2",
              brand: "StyleHub",
              name: "Classic Denim Jacket",
              price: "$129.99",
              rating: 5,
              reviewCount: "189",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34yEatLQt6B9A82mZgfqKsKaLO9/uploaded-1765379342087-vppa57nw.jpg",
              imageAlt: "Classic denim jacket"
            },
            {
              id: "3",
              brand: "StyleHub",
              name: "Fitted Cotton Shirt",
              price: "$59.99",
              rating: 4,
              reviewCount: "156",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34yEatLQt6B9A82mZgfqKsKaLO9/uploaded-1765379340931-vxn2j8dl.jpg",
              imageAlt: "Fitted cotton shirt"
            },
            {
              id: "4",
              brand: "StyleHub",
              name: "Tailored Trousers",
              price: "$99.99",
              rating: 5,
              reviewCount: "201",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34yEatLQt6B9A82mZgfqKsKaLO9/uploaded-1765379343260-1h1k53w0.jpg",
              imageAlt: "Tailored trousers"
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardThree
          title="What Our Customers Say"
          description="Real feedback from real customers who love our clothing and service."
          tag="Reviews"
          tagIcon={Star}
          textboxLayout="default"
          animationType="slide-up"
          containerStyle="default"
          useInvertedBackground="noInvert"
          testimonials={[
            {
              id: "1",
              name: "Sarah",
              handle: "@fashionista_sarah",
              testimonial: "The quality of the clothing is exceptional. I've purchased multiple items and every piece is worth the investment. Customer service is also fantastic!",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34yEatLQt6B9A82mZgfqKsKaLO9/uploaded-1765379345545-3mp2pkne.jpg"
            },
            {
              id: "2",
              name: "Michael",
              handle: "@style_minded",
              testimonial: "Finally found a store with clothing that actually fits well and looks great. The attention to detail is incredible. Highly recommend!",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34yEatLQt6B9A82mZgfqKsKaLO9/uploaded-1765379346834-1y8ebqdn.jpg"
            },
            {
              id: "3",
              name: "Emma",
              handle: "@emma_designs",
              testimonial: "Best online shopping experience I've had. The website is easy to navigate, shipping is fast, and the quality exceeds expectations. Will be a repeat customer!",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34yEatLQt6B9A82mZgfqKsKaLO9/uploaded-1765379348191-1srba1k9.jpg"
            },
            {
              id: "4",
              name: "James",
              handle: "@james_menswear",
              testimonial: "Their men's collection is phenomenal. Great fits, premium fabrics, and reasonable prices. This is my go-to store now.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34yEatLQt6B9A82mZgfqKsKaLO9/uploaded-1765379349175-o20sf6hq.jpg"
            },
            {
              id: "5",
              name: "Lisa",
              handle: "@sustainable_fashion",
              testimonial: "I love that StyleHub is committed to sustainable practices. The clothes are beautiful and I feel good about supporting them.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34yEatLQt6B9A82mZgfqKsKaLO9/uploaded-1765379350337-kf3by5ck.jpg"
            },
            {
              id: "6",
              name: "David",
              handle: "@casual_dresser",
              testimonial: "Perfect balance of style and comfort. I wear their pieces constantly and they hold up great after many washes.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34yEatLQt6B9A82mZgfqKsKaLO9/uploaded-1765379351591-eelj4dp9.jpg"
            }
          ]}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqSplitMedia
          title="Frequently Asked Questions"
          description="Find answers to common questions about our products, shipping, and returns."
          tag="Help"
          tagIcon={HelpCircle}
          textboxLayout="default"
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34yEatLQt6B9A82mZgfqKsKaLO9/uploaded-1765379338257-tuxxejce.jpg"
          imageAlt="Customer support team"
          mediaPosition="left"
          useInvertedBackground="noInvert"
          faqs={[
            {
              id: "1",
              title: "What is your sizing system?",
              content: "We use standard US sizing for all our clothing. Each product page includes a detailed sizing chart. If you're between sizes, we recommend sizing up for a comfortable fit."
            },
            {
              id: "2",
              title: "What is your return policy?",
              content: "We offer a 30-day money-back guarantee on all items. Items must be unworn and in original condition with tags attached. Return shipping is free on all orders."
            },
            {
              id: "3",
              title: "How long does shipping take?",
              content: "Standard shipping typically takes 5-7 business days. We also offer express shipping (2-3 days) and overnight shipping options at checkout."
            },
            {
              id: "4",
              title: "Do you ship internationally?",
              content: "Yes, we ship to over 100 countries worldwide. International shipping rates vary by location. Duties and taxes are the responsibility of the customer."
            },
            {
              id: "5",
              title: "Are your products sustainable?",
              content: "We're committed to sustainability. Most of our clothing is made from eco-friendly materials and our production partners follow ethical labor practices."
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactInline
          text="Ready to refresh your wardrobe?"
          animationType="background-highlight"
          inputPlaceholder="Enter your email"
          buttonText="Get Started"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBaseSocial
          logoText="StyleHub"
          description="Premium clothing for every style and occasion. Discover quality, sustainability, and fashion-forward pieces."
          copyrightText="© 2025 StyleHub. All rights reserved."
          columns={[
            {
              title: "Shop",
              items: [
                { label: "New Arrivals", href: "#products" },
                { label: "Collections", href: "#collections" },
                { label: "Sale", href: "#products" },
                { label: "Gift Cards", href: "#" }
              ]
            },
            {
              title: "Company",
              items: [
                { label: "About Us", href: "#about" },
                { label: "Sustainability", href: "#" },
                { label: "Blog", href: "#" },
                { label: "Careers", href: "#" }
              ]
            },
            {
              title: "Support",
              items: [
                { label: "Contact Us", href: "#contact" },
                { label: "FAQ", href: "#faq" },
                { label: "Shipping Info", href: "#" },
                { label: "Returns", href: "#" }
              ]
            },
            {
              title: "Legal",
              items: [
                { label: "Privacy Policy", href: "#" },
                { label: "Terms of Service", href: "#" },
                { label: "Cookie Policy", href: "#" }
              ]
            }
          ]}
          socialLinks={[
            { icon: Instagram, href: "https://instagram.com", ariaLabel: "Instagram" },
            { icon: Facebook, href: "https://facebook.com", ariaLabel: "Facebook" },
            { icon: Twitter, href: "https://twitter.com", ariaLabel: "Twitter" }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}