/* eslint-disable @next/next/no-img-element, @next/next/no-html-link-for-pages */
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Member Area",
  description: "Clarkson Elementary PTO member dashboard.",
};

const bandUrl = "https://band.us/n/a4abb3e0v4Hbd";

export default function MemberArea() {
  return (
    <main className="member-shell">
      <aside className="member-sidebar">
        <a className="brand" href="/">
          <span className="brand-mark"><img src="/redhawk.png" alt="" /></span>
          <span><strong>Clarkson</strong><small>PTO members</small></span>
        </a>
        <nav className="member-nav" aria-label="Member tools">
          <a className="active" href="#dashboard">Dashboard</a>
          <a href="#commitments">My commitments</a>
          <a href="#hours">Volunteer hours</a>
          <a href="#materials">Meeting materials</a>
          <a href="#committees">Committees</a>
          <a href="#forms">Internal forms</a>
          <a href="#admin">Officer tools</a>
        </nav>
        <div className="member-sidebar-footer">
          <a href={bandUrl} target="_blank" rel="noreferrer">Open BAND ↗</a>
          <a href="/">← Public site</a>
        </div>
      </aside>

      <section className="member-main" id="dashboard">
        <div className="member-topbar">
          <div>
            <p>Clarkson Elementary PTO</p>
            <h1>Welcome, Redhawks.</h1>
          </div>
          <span className="connection-badge">BAND connection pending</span>
        </div>

        <div className="member-notice" role="status">
          <div>
            <strong>Member-area preview</strong>
            <p>Live access will require verified membership in the Clarkson PTO BAND group.</p>
          </div>
          <a href={bandUrl} target="_blank" rel="noreferrer">Visit the BAND group ↗</a>
        </div>

        <div className="dashboard-grid">
          <div className="dashboard-column">
            <article className="dashboard-card" id="commitments">
              <div className="dashboard-card-heading">
                <div><h2>Upcoming commitments</h2><p>Your claimed volunteer shifts and committee tasks.</p></div>
              </div>
              <div className="dashboard-empty">
                <div><strong>No commitments yet</strong><p>Once volunteer signups are connected, the shifts you claim will appear here.</p></div>
              </div>
            </article>

            <article className="dashboard-card" id="hours">
              <div className="dashboard-card-heading">
                <div><h2>Submit volunteer hours</h2><p>Track time given at school, at home, or during PTO events.</p></div>
              </div>
              <form className="hour-form">
                <label>Date<input type="date" disabled /></label>
                <label>Hours<input type="number" min="0" step="0.25" placeholder="0.00" disabled /></label>
                <label className="full">Activity<select disabled defaultValue=""><option value="">Select an activity</option></select></label>
                <label className="full">Notes<textarea placeholder="Tell us how you helped" disabled /></label>
                <button type="button" disabled>Available after BAND verification</button>
              </form>
            </article>

            <article className="dashboard-card" id="materials">
              <div className="dashboard-card-heading">
                <div><h2>Member materials</h2><p>Meeting packets, committee resources, and internal forms.</p></div>
              </div>
              <div className="material-list">
                <div className="material-row"><div><h3>Meeting materials</h3><p>Agendas, draft minutes, and supporting documents.</p></div><span>Awaiting upload</span></div>
                <div className="material-row" id="committees"><div><h3>Committee resources</h3><p>Shared guides, timelines, and project notes.</p></div><span>Awaiting upload</span></div>
                <div className="material-row" id="forms"><div><h3>Internal forms</h3><p>Reimbursements, requests, and officer workflows.</p></div><span>Awaiting upload</span></div>
              </div>
            </article>
          </div>

          <div className="dashboard-column">
            <article className="dashboard-card">
              <div className="dashboard-card-heading"><div><h2>Your year</h2><p>Member activity at a glance.</p></div></div>
              <div className="quick-stat-grid">
                <div className="quick-stat"><strong>0</strong><span>Volunteer hours</span></div>
                <div className="quick-stat"><strong>0</strong><span>Upcoming shifts</span></div>
                <div className="quick-stat"><strong>0</strong><span>Committees</span></div>
                <div className="quick-stat"><strong>0</strong><span>Forms pending</span></div>
              </div>
            </article>

            <article className="dashboard-card">
              <div className="dashboard-card-heading"><div><h2>Quick links</h2><p>Go straight to the tools families use most.</p></div></div>
              <div className="task-list">
                <div className="task-row"><div><h3>BAND community</h3><p>Announcements and conversations</p></div><span>Open ↗</span></div>
                <div className="task-row"><div><h3>Volunteer signup</h3><p>Current opportunities</p></div><span>Coming soon</span></div>
                <div className="task-row"><div><h3>Spirit wear</h3><p>Redhawk shop</p></div><span>Coming soon</span></div>
              </div>
            </article>

            <article className="dashboard-card admin-preview" id="admin">
              <div className="dashboard-card-heading"><div><h2>Officer tools</h2><p>Visible only to authorized PTO officers after launch.</p></div></div>
              <div className="admin-tools">
                <span>Review hours</span><span>Publish documents</span><span>Manage links</span><span>Export reports</span>
              </div>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
