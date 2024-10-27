
import React from 'react';
import styles from '../styles/Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.subscribeSection}>
        <h3>BE THE FIRST TO KNOW</h3>
        <p>Sign up for updates from mettä muse.</p>
        <form>
          <input type="email" placeholder="Enter your e-mail..." />
          <button type="submit">SUBSCRIBE</button>
        </form>
      </div>
      <div className={styles.footerContent}>
        <div className={styles.infoSection}>
          <h4>mettä muse</h4>
          <ul className={styles.list}>
            <li className={styles.listItem}><a href="#" className={styles.link}>About Us</a></li>
            <li className={styles.listItem}><a href="#" className={styles.link}>Stories</a></li>
            <li className={styles.listItem}><a href="#" className={styles.link}>Artisans</a></li>
            <li className={styles.listItem}><a href="#" className={styles.link}>Boutiques</a></li>
            <li className={styles.listItem}><a href="#" className={styles.link}>Contact Us</a></li>
            <li className={styles.listItem}><a href="#" className={styles.link}>EU Compliance Docs</a></li>
          </ul>
        </div>
        <div className={styles.linksSection}>
          <h4>QUICK LINKS</h4>
          <ul className={styles.list}>
            <li className={styles.listItem}><a href="#" className={styles.link}>Orders & Shipping</a></li>
            <li className={styles.listItem}><a href="#" className={styles.link}>Join/Login as a Seller</a></li>
            <li className={styles.listItem}><a href="#" className={styles.link}>Payment & Pricing</a></li>
            <li className={styles.listItem}><a href="#" className={styles.link}>Return & Refunds</a></li>
            <li className={styles.listItem}><a href="#" className={styles.link}>FAQs</a></li>
            <li className={styles.listItem}><a href="#" className={styles.link}>Privacy Policy</a></li>
            <li className={styles.listItem}><a href="#" className={styles.link}>Terms & Conditions</a></li>
          </ul>
        </div>
        <div className={styles.contactSection}>
          <h4>CONTACT US</h4>
          <p>+44 221 133 5360</p>
          <p>customercare@mettamuse.com</p>
          <h4>CURRENCY</h4>
          <p>USD</p>
        </div>
        <div className={styles.socialSection}>
          <h4>FOLLOW US</h4>
          <div className={styles.socialIcons}>
            <a href="#"><img src="/icons/instagram.png" alt="Instagram" /></a>
            <a href="#"><img src="/icons/linkedin.png" alt="LinkedIn" /></a>
          </div>
          <h4>mettä muse ACCEPTS</h4>
          <div className={styles.paymentIcons}>
            <img src="/icons/gpay.png" alt="Google Pay" />
            <img src="/icons/applepay.png" alt="Apple Pay" />
            <img src="/icons/paypal.png" alt="PayPal" />
            <img src="/icons/mastercard.png" alt="MasterCard" />
            <img src="/icons/visa.png" alt="Visa" />
          </div>
        </div>
      </div>
      <p className={styles.copyright}>© 2024 mettä muse. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
