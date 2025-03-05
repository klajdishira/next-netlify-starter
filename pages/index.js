import Head from 'next/head';

function Home() {
  const colors = {
    primary: "#00125c",   // Dark blue
    secondary: "#9aca3c", // Lime green
    white: "#ffffff",
    lightGray: "#f0f0f0",
    offWhite: "#f9f9f9"
  };

  return (
    <div style={styles.container}>
      <Head>
        <title>EU-Africa Business Forum Facility</title>
        <meta name="description" content="EU-Africa Business Forum Facility page" />
      </Head>

      {/* Header */}
      <header style={{ ...styles.header, backgroundColor: colors.primary }}>
        <h1 style={{ color: colors.white }}>EU-Africa Business Forum Facility</h1>
      </header>

      {/* Hero / About Section */}
      <section style={styles.heroSection}>
        <div style={styles.heroContent}>
          <h2 style={{ color: colors.primary }}>What is the EU-Africa Business Forum?</h2>
          <p>
            The high-level event “EU-Africa Business Forum (EABF)” offers a platform for dialogue, bringing together political and business
            leaders from the European Union (EU) and Africa. Its aim is to increase investment and trade opportunities, fostering sustainable
            economic partnerships between the two continents.
          </p>
          <img
            src="https://via.placeholder.com/800x400"
            alt="EU-Africa Business Forum"
            style={styles.responsiveImage}
          />
        </div>
      </section>

      {/* Timeline & History */}
      <section style={styles.timelineSection}>
        <h2 style={{ color: colors.primary, textAlign: "center" }}>Timeline & History</h2>
        <div style={styles.timelineGrid}>
          <div style={styles.timelineCard}>
            <img
              src="https://via.placeholder.com/150"
              alt="2006 Brussels"
              style={styles.timelineImage}
            />
            <div>
              <h3>2006</h3>
              <p>Brussels</p>
            </div>
          </div>
          <div style={styles.timelineCard}>
            <img
              src="https://via.placeholder.com/150"
              alt="2007 Accra"
              style={styles.timelineImage}
            />
            <div>
              <h3>2007</h3>
              <p>Accra</p>
            </div>
          </div>
          <div style={styles.timelineCard}>
            <img
              src="https://via.placeholder.com/150"
              alt="2009 Nairobi"
              style={styles.timelineImage}
            />
            <div>
              <h3>2009</h3>
              <p>Nairobi</p>
            </div>
          </div>
          <div style={styles.timelineCard}>
            <img
              src="https://via.placeholder.com/150"
              alt="2010 Tripoli"
              style={styles.timelineImage}
            />
            <div>
              <h3>2010</h3>
              <p>Tripoli</p>
            </div>
          </div>
        </div>
      </section>

      {/* Global Gateway Priority Sectors */}
      <section style={styles.sectorsSection}>
        <h2 style={{ color: colors.primary, textAlign: "center" }}>Global Gateway Priority Sectors</h2>
        <div style={styles.sectorsGrid}>
          <div style={styles.sectorCard}>
            <img
              src="https://via.placeholder.com/150"
              alt="Digital Sector"
              style={styles.sectorImage}
            />
            <h3>Digital Sector</h3>
          </div>
          <div style={styles.sectorCard}>
            <img
              src="https://via.placeholder.com/150"
              alt="Climate & Energy"
              style={styles.sectorImage}
            />
            <h3>Climate & Energy</h3>
          </div>
          <div style={styles.sectorCard}>
            <img
              src="https://via.placeholder.com/150"
              alt="Transport"
              style={styles.sectorImage}
            />
            <h3>Transport</h3>
          </div>
          <div style={styles.sectorCard}>
            <img
              src="https://via.placeholder.com/150"
              alt="Health"
              style={styles.sectorImage}
            />
            <h3>Health</h3>
          </div>
          <div style={styles.sectorCard}>
            <img
              src="https://via.placeholder.com/150"
              alt="Education & Research"
              style={styles.sectorImage}
            />
            <h3>Education & Research</h3>
          </div>
        </div>
      </section>

      {/* EABF Facility Overview */}
      <section style={styles.facilitySection}>
        <h2 style={{ color: colors.primary }}>EABF Facility Overview</h2>
        <p>
          Established by the European Commission in 2024, the EABF Facility organizes the continental EU-Africa Business Forum every three years
          and supports bilateral Business Forums with its African Partners. The facility is managed by a dedicated team and implements a 5-year
          action programme focusing on:
        </p>
        <ul>
          <li>
            <strong>Business Fora:</strong> Organizing events for enhanced G2G and B2G dialogue.
          </li>
          <li>
            <strong>Networking:</strong> Facilitating B2B matchmaking and economic/business missions.
          </li>
          <li>
            <strong>Capacity Building:</strong> Training, webinars, and workshops for EU and African Business Organisations.
          </li>
          <li>
            <strong>Communication:</strong> Enhancing knowledge sharing through dialogues and collaborative initiatives.
          </li>
        </ul>
      </section>

      {/* Our Team Section */}
      <section style={styles.teamSection}>
        <h2 style={{ color: colors.primary, textAlign: "center" }}>Our Team</h2>
        <div style={styles.teamGrid}>
          <div style={styles.teamCard}>
            <img
              src="https://via.placeholder.com/150"
              alt="Jane Doe"
              style={styles.teamImage}
            />
            <h3>Jane Doe</h3>
            <p>Project Manager</p>
          </div>
          <div style={styles.teamCard}>
            <img
              src="https://via.placeholder.com/150"
              alt="John Smith"
              style={styles.teamImage}
            />
            <h3>John Smith</h3>
            <p>Coordinator</p>
          </div>
          <div style={styles.teamCard}>
            <img
              src="https://via.placeholder.com/150"
              alt="Mary Johnson"
              style={styles.teamImage}
            />
            <h3>Mary Johnson</h3>
            <p>Communications Lead</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ ...styles.footer, backgroundColor: colors.primary }}>
        <p style={{ color: colors.white }}>&copy; {new Date().getFullYear()} EU-Africa Business Forum Facility</p>
      </footer>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    margin: 0,
    padding: 0,
    boxSizing: "border-box"
  },
  header: {
    padding: "1.5rem",
    textAlign: "center"
  },
  heroSection: {
    backgroundColor: "#f0f0f0",
    padding: "2rem 1rem",
    textAlign: "center"
  },
  heroContent: {
    maxWidth: "800px",
    margin: "0 auto"
  },
  responsiveImage: {
    width: "100%",
    height: "auto",
    borderRadius: "8px",
    marginTop: "1rem"
  },
  timelineSection: {
    padding: "2rem 1rem",
    backgroundColor: "#ffffff"
  },
  timelineGrid: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    gap: "1rem",
    marginTop: "1rem"
  },
  timelineCard: {
    flex: "1 1 200px",
    backgroundColor: "#f9f9f9",
    borderRadius: "8px",
    padding: "1rem",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
    textAlign: "center"
  },
  timelineImage: {
    width: "100%",
    height: "auto",
    borderRadius: "4px"
  },
  sectorsSection: {
    padding: "2rem 1rem",
    backgroundColor: "#f0f0f0"
  },
  sectorsGrid: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    gap: "1rem",
    marginTop: "1rem"
  },
  sectorCard: {
    flex: "1 1 150px",
    backgroundColor: "#ffffff",
    borderRadius: "8px",
    padding: "1rem",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
    textAlign: "center"
  },
  sectorImage: {
    width: "100%",
    height: "auto",
    borderRadius: "4px"
  },
  facilitySection: {
    padding: "2rem 1rem",
    backgroundColor: "#ffffff"
  },
  teamSection: {
    padding: "2rem 1rem",
    backgroundColor: "#f9f9f9"
  },
  teamGrid: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    gap: "1rem",
    marginTop: "1rem"
  },
  teamCard: {
    flex: "1 1 200px",
    backgroundColor: "#ffffff",
    borderRadius: "8px",
    padding: "1rem",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
    textAlign: "center"
  },
  teamImage: {
    width: "100%",
    height: "auto",
    borderRadius: "50%",
    marginBottom: "0.5rem"
  },
  footer: {
    padding: "1.5rem",
    textAlign: "center"
  }
};

export default Home;
