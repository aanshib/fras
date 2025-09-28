
import "./App.css"
import forestImg from "./assets/aerial-view-of-dense-green-forest-canopy-with-rive.jpg";
import {
  Satellite,
  Users,
  FileText,
  BarChart3,
  Shield,
  Globe,
  Cpu,
  Database,
  LineChart,
} from "lucide-react"

export default function HomePage() {
  return (
    <div className="homepage">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>FRA Atlas</h1>
          <p className="subtitle">
            Digitizing Forest Land Rights for Sustainable Development
          </p>
          <p className="description">
            A comprehensive digital platform for managing Forest Rights Act
            claims, powered by AI and satellite technology to ensure transparent
            and efficient land rights management.
          </p>
          <div className="button-group">
            <button className="btn-primary">Explore Atlas</button>
            <button className="btn-outline">Learn More</button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="features">
        <div className="section-header">
          <h2>Transforming Forest Rights Management</h2>
          <p>
            Our AI-powered platform digitizes legacy records, creates
            comprehensive atlases, and provides intelligent decision support for
            sustainable forest governance.
          </p>
        </div>

        <div className="card-grid">
          <div className="card">
            <FileText className="icon" />
            <h3>Digital Record Management</h3>
            <p>
              Convert paper-based FRA claims into standardized digital formats
              with AI-powered OCR and handwriting recognition.
            </p>
          </div>

          <div className="card">
            <Globe className="icon" />
            <h3>WebGIS Portal</h3>
            <p>
              Interactive mapping platform for visualizing land rights, claims
              status, and environmental data.
            </p>
          </div>

          <div className="card">
            <Satellite className="icon" />
            <h3>AI Asset Mapping</h3>
            <p>
              Satellite imagery analysis to automatically detect and map land,
              forests, water bodies, and settlements.
            </p>
          </div>

          <div className="card">
            <BarChart3 className="icon" />
            <h3>Decision Support System</h3>
            <p>
              Smart recommendations for schemes based on land use and community
              needs.
            </p>
          </div>

          <div className="card">
            <Shield className="icon" />
            <h3>Fraud Detection</h3>
            <p>
              Detect duplicate claims, overlapping parcels, and suspicious
              applications for transparency.
            </p>
          </div>

          <div className="card">
            <Users className="icon" />
            <h3>Multilingual Support</h3>
            <p>
              Voice and handwriting recognition in multiple Indian languages for
              accessibility.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="stats">
        <div className="section-header">
          <h2>Impact by Numbers</h2>
          <p>Transforming forest governance across India</p>
        </div>
        <div className="stats-grid">
          <div>
            <h3>2.5M+</h3>
            <p>Claims Digitized</p>
          </div>
          <div>
            <h3>15,000+</h3>
            <p>Villages Mapped</p>
          </div>
          <div>
            <h3>97.5%</h3>
            <p>OCR Accuracy</p>
          </div>
          <div>
            <h3>28</h3>
            <p>States Covered</p>
          </div>
        </div>
      </section>

      {/* NEW: Cutting-Edge Technology Section */}
      <section className="technology">
        <div className="section-header">
          <h2>Cutting-Edge Technology</h2>
          <p>
            Our platform leverages the latest advances in AI, satellite imagery,
            and geospatial technology to provide unprecedented insights into
            forest land rights and environmental patterns.
          </p>
        </div>

        <div className="tech-grid">
          <div className="tech-features">
            <div className="tech-card">
              <Cpu className="icon" />
              <h3>Segment Anything Model (SAM)</h3>
              <p>
                Zero-shot land use segmentation combined with NDVI analysis for
                automatic classification of agriculture, forest, and water
                bodies.
              </p>
            </div>

            <div className="tech-card">
              <Database className="icon" />
              <h3>Advanced GIS Integration</h3>
              <p>
                Real-time mapping with vector tiles, time-lapse visualization,
                and multi-layer environmental monitoring.
              </p>
            </div>

            <div className="tech-card">
              <LineChart className="icon" />
              <h3>Predictive Analytics</h3>
              <p>
                Machine learning models for risk assessment, scheme
                recommendations, and resource optimization.
              </p>
            </div>
          </div>

          <div className="tech-image">
            <img src={forestImg} alt="Forest" />
                        
            <div className="live-data">
              <span className="dot"></span> Live Data
              <strong> 99.2%</strong>
              <p>System Accuracy</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <h2>Ready to Transform Forest Governance?</h2>
        <p>
          Join thousands of officials, researchers, and communities using FRA
          Atlas to create transparent and sustainable land management.
        </p>
        <div className="button-group">
          <button className="btn-light">Request Demo</button>
          <button className="btn-outline-light">View Documentation</button>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <h3>FRA Atlas</h3>
        <p>
          Empowering sustainable forest governance through digital innovation
          and AI-powered insights.
        </p>
        <p className="copyright">
          &copy; 2024 FRA Atlas. Built for sustainable forest governance in
          India.
        </p>
      </footer>
    </div>
  )
}
