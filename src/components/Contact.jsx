import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { motion } from 'framer-motion';

export default function Contact() {
  const [state, handleSubmit] = useForm('mpwrnpdv');

  return (
    <section
      id="contact"
      style={{
        background: '#FAF8F2',
        padding: '96px 0',
        borderBottom: '2px solid #1A1A1A',
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          style={{ marginBottom: '64px' }}
        >
          <span className="section-label">06 / Contact</span>
          <h2
            style={{
              fontFamily: 'Space Grotesk, sans-serif',
              fontWeight: '800',
              fontSize: 'clamp(2.5rem, 6vw, 5rem)',
              color: '#1A1A1A',
              letterSpacing: '-0.02em',
              margin: '8px 0 0',
              lineHeight: '1',
            }}
          >
            LET'S BUILD
            <br />
            <span style={{ color: '#8B6244' }}>SOMETHING</span>
          </h2>
        </motion.div>

        <div className="contact-grid">
          {/* Left: info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p
              style={{
                fontFamily: 'Space Grotesk, sans-serif',
                fontSize: '1.05rem',
                lineHeight: '1.75',
                color: '#3D2B1F',
                marginBottom: '40px',
                marginTop: 0,
              }}
            >
              I'm not chasing small wins anymore. I want to build systems that impact millions,
              maybe billions. If you're working on something that matters—or you see something
              in what I'm building—reach out.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {[
                {
                  label: 'Email',
                  value: 'team@sagarteotia.in',
                  href: 'mailto:team@sagarteotia.in',
                },
                {
                  label: 'GitHub',
                  value: 'github.com/sagar1teotia',
                  href: 'https://github.com/sagar1teotia',
                },
                {
                  label: 'LinkedIn',
                  value: 'linkedin.com/in/sagarteotia',
                  href: 'https://linkedin.com/in/sagarteotia',
                },
              ].map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '16px',
                    background: '#FFFFFF',
                    border: '2px solid #1A1A1A',
                    boxShadow: '3px 3px 0 #1A1A1A',
                    padding: '16px 20px',
                    transition: 'transform 0.15s, box-shadow 0.15s',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translate(-2px, -2px)';
                    e.currentTarget.style.boxShadow = '5px 5px 0 #1A1A1A';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = '';
                    e.currentTarget.style.boxShadow = '3px 3px 0 #1A1A1A';
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'Space Mono, monospace',
                      fontSize: '0.6rem',
                      color: '#8B6244',
                      fontWeight: '700',
                      letterSpacing: '0.14em',
                      textTransform: 'uppercase',
                      minWidth: '64px',
                    }}
                  >
                    {item.label}
                  </span>
                  <span
                    style={{
                      fontFamily: 'Space Grotesk, sans-serif',
                      fontWeight: '600',
                      fontSize: '0.92rem',
                      color: '#1A1A1A',
                    }}
                  >
                    {item.value}
                  </span>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {state.succeeded ? (
              <div
                style={{
                  background: '#EDE6D3',
                  border: '2px solid #1A1A1A',
                  boxShadow: '4px 4px 0 #1A1A1A',
                  padding: '48px 32px',
                  textAlign: 'center',
                }}
              >
                <div
                  style={{
                    fontFamily: 'Space Grotesk, sans-serif',
                    fontWeight: '800',
                    fontSize: '1.6rem',
                    color: '#1A1A1A',
                    marginBottom: '12px',
                  }}
                >
                  Message sent.
                </div>
                <p
                  style={{
                    fontFamily: 'Space Grotesk, sans-serif',
                    fontSize: '1rem',
                    color: '#3D2B1F',
                    margin: 0,
                  }}
                >
                  I'll get back to you soon. Thanks for reaching out.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                style={{
                  background: '#FFFFFF',
                  border: '2px solid #1A1A1A',
                  boxShadow: '4px 4px 0 #1A1A1A',
                  padding: '32px',
                }}
              >
                {[
                  { name: 'name', label: 'Your Name', type: 'text', placeholder: 'John Doe' },
                  {
                    name: 'email',
                    label: 'Your Email',
                    type: 'email',
                    placeholder: 'john@example.com',
                  },
                ].map((field) => (
                  <div key={field.name} style={{ marginBottom: '20px' }}>
                    <label
                      htmlFor={field.name}
                      style={{
                        display: 'block',
                        fontFamily: 'Space Mono, monospace',
                        fontSize: '0.6rem',
                        fontWeight: '700',
                        color: '#8B6244',
                        letterSpacing: '0.14em',
                        textTransform: 'uppercase',
                        marginBottom: '6px',
                      }}
                    >
                      {field.label}
                    </label>
                    <input
                      id={field.name}
                      type={field.type}
                      name={field.name}
                      placeholder={field.placeholder}
                      required
                      style={{
                        width: '100%',
                        border: '2px solid #1A1A1A',
                        padding: '12px 14px',
                        fontSize: '0.95rem',
                        color: '#1A1A1A',
                        background: '#FAF8F2',
                        outline: 'none',
                        boxSizing: 'border-box',
                        transition: 'box-shadow 0.15s',
                        borderRadius: 0,
                      }}
                      onFocus={(e) => (e.target.style.boxShadow = '3px 3px 0 #8B6244')}
                      onBlur={(e) => (e.target.style.boxShadow = 'none')}
                    />
                    <ValidationError prefix={field.label} field={field.name} errors={state.errors} />
                  </div>
                ))}

                <div style={{ marginBottom: '24px' }}>
                  <label
                    htmlFor="message"
                    style={{
                      display: 'block',
                      fontFamily: 'Space Mono, monospace',
                      fontSize: '0.6rem',
                      fontWeight: '700',
                      color: '#8B6244',
                      letterSpacing: '0.14em',
                      textTransform: 'uppercase',
                      marginBottom: '6px',
                    }}
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="What are you building?"
                    required
                    style={{
                      width: '100%',
                      border: '2px solid #1A1A1A',
                      padding: '12px 14px',
                      fontSize: '0.95rem',
                      color: '#1A1A1A',
                      background: '#FAF8F2',
                      outline: 'none',
                      resize: 'vertical',
                      boxSizing: 'border-box',
                      transition: 'box-shadow 0.15s',
                      borderRadius: 0,
                    }}
                    onFocus={(e) => (e.target.style.boxShadow = '3px 3px 0 #8B6244')}
                    onBlur={(e) => (e.target.style.boxShadow = 'none')}
                  />
                  <ValidationError prefix="Message" field="message" errors={state.errors} />
                </div>

                <button
                  type="submit"
                  disabled={state.submitting}
                  className="brutal-btn"
                  style={{
                    width: '100%',
                    background: '#1A1A1A',
                    color: '#FAF8F2',
                    padding: '14px',
                    fontWeight: '700',
                    fontSize: '0.88rem',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    border: '2px solid #1A1A1A',
                    cursor: state.submitting ? 'wait' : 'pointer',
                    opacity: state.submitting ? 0.7 : 1,
                    display: 'block',
                  }}
                >
                  {state.submitting ? 'Sending...' : 'Send Message →'}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
