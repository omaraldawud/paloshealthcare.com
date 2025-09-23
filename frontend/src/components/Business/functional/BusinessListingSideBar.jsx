//
const BusinessListingSideBar = () => {
  return (
    <div className="sticky-top" style={{ top: "100px" }}>
      {/* Featured Business */}
      <div className="mb-4 p-3 bg-light rounded shadow-sm">
        <h5 className="fw-bold">Featured Business</h5>
        <p>Highlight a business here.</p>
      </div>

      {/* Promotions / Ads */}
      <div className="mb-4 p-3 bg-light rounded shadow-sm">
        <h5 className="fw-bold">Promotions</h5>
        <p>Google Ads or other promotions can go here.</p>
      </div>

      <div className="mb-4 p-3 bg-light rounded shadow-sm">
        <h5 className="fw-bold">Another Ad / Info</h5>
        <p>Optional extra widget.</p>
      </div>
    </div>
  );
};

export default BusinessListingSideBar;
