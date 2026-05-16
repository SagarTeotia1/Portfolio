import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { motion } from 'framer-motion';

export default function Contact() {
  const [state, handleSubmit] = useForm('mpwrnpdv');

  return (
    <section
      id="contact"
      className="section-mobile"
      style={{
        background: '#FAF8F2',
        padding: '96px 0',
        borderTop: '2px solid #1A1A1A',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Ghost number */}
      <div className="section-ghost-num">06</div>

      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>
        {/* The story closes here */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          style={{ marginBottom: '72px' }}
        >
          <span className="section-label">06 / Contact</span>
          <h2
            style={{
              fontFamily: 'Space Grotesk, sans-serif',
              fontWeight: '800',
              fontSize: 'clamp(2rem, 5.5vw, 4.5rem)',
              color: '#1A1A1A',
              letterSpacing: '-0.025em',
              margin: '8px 0 16px',
              lineHeight: '1.05',
            }}
          >
            Still searching
            <br />
            <span style={{ color: '#8B6244' }}>for the bird.</span>
          </h2>
          <p
            style={{
              fontFamily: 'Space Grotesk, sans-serif',
              fontSize: '1.05rem',
              lineHeight: '1.72',
              color: '#3D2B1F',
              maxWidth: '560px',
              margin: 0,
            }}
          >
            I'm not chasing small wins. I want to build systems that reach millions — maybe
            billions. If you're working on something that matters, or you see potential in what
            I've built, reach out.
          </p>
        </motion.div>

        <div className="contact-grid">
          {/* Left: links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {/* Big email */}
            <a
              href="mailto:sagar1teotia@gmail.com"
              style={{
                display: 'block',
                fontFamily: 'Space Grotesk, sans-serif',
                fontWeight: '800',
                fontSize: 'clamp(1.1rem, 2.5vw, 1.6rem)',
                color: '#1A1A1A',
                letterSpacing: '-0.02em',
                marginBottom: '40px',
                borderBottom: '2px solid #1A1A1A',
                paddingBottom: '16px',
                transition: 'color 0.15s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#8B6244')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#1A1A1A')}
            >
              sagar1teotia@gmail.com ↗
            </a>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {[
                {
                  label: 'GitHub',
                  value: 'github.com/SagarTeotia1',
                  href: 'https://github.com/SagarTeotia1',
                },
                {
                  label: 'LinkedIn',
                  value: 'linkedin.com/in/sagarteotia',
                  href: 'https://linkedin.com/in/sagarteotia',
                },
              ].map((item, i) => (
                <motion.a
                  key={i}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                  viewport={{ once: true }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '16px',
                    background: '#FFFFFF',
                    border: '2px solid #1A1A1A',
                    boxShadow: '3px 3px 0 #1A1A1A',
                    padding: '14px 18px',
                    transition: 'transform 0.15s, box-shadow 0.15s',
                  }}
                  whileHover={{
                    y: -2,
                    boxShadow: '3px 5px 0 #1A1A1A',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'Space Mono, monospace',
                      fontSize: '0.58rem',
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
                      fontSize: '0.9rem',
                      color: '#1A1A1A',
                    }}
                  >
                    {item.value}
                  </span>
                </motion.a>
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
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                style={{
                  background: '#EDE6D3',
                  border: '2px solid #1A1A1A',
                  boxShadow: '4px 4px 0 #8B6244',
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
                    letterSpacing: '-0.01em',
                  }}
                >
                  Message sent.
                </div>
                <p
                  style={{
                    fontFamily: 'Space Mono, monospace',
                    fontSize: '0.82rem',
                    color: '#3D2B1F',
                    margin: 0,
                    fontStyle: 'italic',
                  }}
                >
                  The cage found a signal. I'll be in touch.
                </p>
              </motion.div>
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
                        fontSize: '0.58rem',
                        fontWeight: '700',
                        color: '#8B6244',
                        letterSpacing: '0.15em',
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
                      fontSize: '0.58rem',
                      fontWeight: '700',
                      color: '#8B6244',
                      letterSpacing: '0.15em',
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

                <motion.button
                  type="submit"
                  disabled={state.submitting}
                  whileHover={{ y: -1 }}
                  whileTap={{ y: 1 }}
                  style={{
                    width: '100%',
                    background: '#1A1A1A',
                    color: '#FAF8F2',
                    padding: '14px',
                    fontFamily: 'Space Grotesk, sans-serif',
                    fontWeight: '700',
                    fontSize: '0.88rem',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    border: '2px solid #1A1A1A',
                    boxShadow: '3px 3px 0 #1A1A1A',
                    cursor: state.submitting ? 'wait' : 'pointer',
                    opacity: state.submitting ? 0.7 : 1,
                    display: 'block',
                    transition: 'box-shadow 0.12s',
                  }}
                >
                  {state.submitting ? 'Sending...' : 'Send Message →'}
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
