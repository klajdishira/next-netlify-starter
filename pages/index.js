import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>EU-Africa Business Forum Facility</title>
        <meta name="description" content="EU-Africa Business Forum Facility page" />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      </Head>

      {/* Header */}
      <header>
        <h1>EU-Africa Business Forum Facility</h1>
      </header>

      {/* Hero / About Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h2>What is the EU-Africa Business Forum?</h2>
          <p>
            The high-level event “EU-Africa Business Forum (EABF)” offers a platform for dialogue,
            bringing together political and business leaders from the European Union (EU) and Africa.
            Its aim is to increase investment and trade opportunities, fostering sustainable economic partnerships
            between the two continents.
          </p>
          <img
            src="https://via.placeholder.com/800x400"
            alt="EU-Africa Business Forum"
            className="responsive-image"
          />
        </div>
      </section>

      {/* Sectors Section */}
      <section className="sectors-section">
        <h2>Global Gateway Priority Sectors</h2>
        <div className="sectors-grid">
          <div className="sector-card">
            <img src="https://via.placeholder.com/50" alt="Digital Logo" className="logo" />
            <h3>Digital Sector</h3>
            <p>Focuses on IT, innovation, and connectivity to drive modern business solutions.</p>
          </div>
          <div className="sector-card">
            <img src="https://via.placeholder.com/50" alt="Climate & Energy Logo" className="logo" />
            <h3>Climate & Energy</h3>
            <p>Encourages sustainable practices and renewable energy solutions for a greener future.</p>
          </div>
          <div className="sector-card">
            <img src="https://via.placeholder.com/50" alt="Transport Logo" className="logo" />
            <h3>Transport</h3>
            <p>Improves mobility and logistics through innovative transport solutions.</p>
          </div>
          <div className="sector-card">
            <img src="https://via.placeholder.com/50" alt="Health Logo" className="logo" />
            <h3>Health</h3>
            <p>Enhances healthcare services and drives innovation in medical technologies.</p>
          </div>
          <div className="sector-card">
            <img src="https://via.placeholder.com/50" alt="Education & Research Logo" className="logo" />
            <h3>Education & Research</h3>
            <p>Fosters knowledge sharing, academic partnerships, and innovative research.</p>
          </div>
        </div>
      </section>

      {/* Facility Overview Section */}
      <section className="facility-section">
        <h2>EABF Facility Overview</h2>
        <p>
          Established by the European Commission in 2024, the EABF Facility organizes the continental EU-Africa
          Business Forum every three years and supports bilateral Business Forums with its African Partners.
          Managed by a dedicated team, it implements a 5-year action programme focusing on:
        </p>
        <ul>
          <li><strong>Business Fora:</strong> Organizing events for enhanced G2G and B2G dialogue.</li>
          <li><strong>Networking:</strong> Facilitating B2B matchmaking and economic/business missions.</li>
          <li><strong>Capacity Building:</strong> Training, webinars, and workshops for EU and African Business Organisations.</li>
          <li><strong>Communication:</strong> Enhancing knowledge sharing through dialogues and collaborative initiatives.</li>
        </ul>
      </section>

      {/* Our Team Section */}
      <section className="team-section">
        <h2>Our Team</h2>
        <div className="team-grid">
          <div className="team-card">
            <img src="https://via.placeholder.com/100" alt="Jane Doe" />
            <h3>Jane Doe</h3>
            <p>Project Manager</p>
          </div>
          <div className="team-card">
            <img src="https://via.placeholder.com/100" alt="John Smith" />
            <h3>John Smith</h3>
            <p>Coordinator</p>
          </div>
          <div className="team-card">
            <img src="https://via.placeholder.com/100" alt="Mary Johnson" />
            <h3>Mary Johnson</h3>
            <p>Communications Lead</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <p>&copy; 2025 EU-Africa Business Forum Facility</p>
      </footer>

      {/* Global Styles */}
      <style jsx global>{`
        /* Reset & Base Styles */
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }
        body {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          line-height: 1.6;
          background-color: #fff;
          color: #333;
        }
        /* Header */
        header {
          background-color: #00125c;
          padding: 1.5rem;
          text-align: center;
        }
        header h1 {
          color: #ffffff;
        }
        /* Hero Section */
        .hero-section {
          background-color: #f0f0f0;
          padding: 2rem 1rem;
          text-align: center;
        }
        .hero-content {
          max-width: 800px;
          margin: 0 auto;
        }
        .responsive-image {
          width: 100%;
          height: auto;
          border-radius: 8px;
          margin-top: 1rem;
        }
        /* Sectors Section */
        .sectors-section {
          background-color: #f0f0f0;
          padding: 2rem 1rem;
        }
        .sectors-section h2 {
          color: #00125c;
          text-align: center;
          margin-bottom: 1rem;
        }
        .sectors-grid {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 1rem;
          margin-top: 1rem;
        }
        .sector-card {
          background-color: #ffffff;
          border-radius: 8px;
          padding: 1rem;
          width: 200px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          text-align: center;
        }
        .sector-card img.logo {
          width: 50px;
          height: 50px;
          display: block;
          margin: 0 auto 0.5rem;
        }
        .sector-card h3 {
          margin-bottom: 0.5rem;
          color: #00125c;
        }
        .sector-card p {
          font-size: 0.9rem;
          color: #555;
        }
        /* Facility Overview Section */
        .facility-section {
          background-color: #ffffff;
          padding: 2rem 1rem;
        }
        .facility-section h2 {
          color: #00125c;
          margin-bottom: 1rem;
          text-align: center;
        }
        .facility-section ul {
          list-style-type: disc;
          margin-left: 1.5rem;
        }
        .facility-section li {
          margin: 0.5rem 0;
        }
        /* Team Section */
        .team-section {
          background-color: #f9f9f9;
          padding: 2rem 1rem;
          text-align: center;
        }
        .team-section h2 {
          color: #00125c;
          margin-bottom: 1rem;
        }
        .team-grid {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 1rem;
          margin-top: 1rem;
        }
        .team-card {
          background-color: #ffffff;
          border-radius: 8px;
          padding: 1rem;
          width: 200px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          text-align: center;
        }
        .team-card img {
          width: 100px;
          height: 100px;
          border-radius: 50%;
          margin-bottom: 0.5rem;
        }
        .team-card h3 {
          color: #00125c;
          margin-bottom: 0.25rem;
        }
        .team-card p {
          font-size: 0.9rem;
          color: #555;
        }
        /* Footer */
        footer {
          background-color: #00125c;
          padding: 1.5rem;
          text-align: center;
        }
        footer p {
          color: #ffffff;
        }
      `}</style>
    </>
  );
}
