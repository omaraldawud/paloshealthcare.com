//

//

export default function () {
  return (
    <div className="mt-auto mb-3">
      <div className="d-flex justify-content-center gap-4 flex-wrap">
        {/* Verified Hospitals */}
        <div
          className="text-center bg-light rounded-3 shadow-sm p-3 flex-fill"
          style={{ minWidth: "120px" }}
        >
          <i className="bi bi-hospital fs-2 text-primary mb-2"></i>
          <h4 className="fw-bold mb-1">120</h4>
          <p className="mb-0 text-muted">Verified Hospitals</p>
        </div>

        {/* Verified Clinics */}
        <div
          className="text-center bg-light rounded-3 shadow-sm p-3 flex-fill"
          style={{ minWidth: "120px" }}
        >
          <i className="bi bi-building fs-2 text-success mb-2"></i>
          <h4 className="fw-bold mb-1">85</h4>
          <p className="mb-0 text-muted">Verified Clinics</p>
        </div>

        {/* Verified Users */}
        <div
          className="text-center bg-light rounded-3 shadow-sm p-3 flex-fill"
          style={{ minWidth: "120px" }}
        >
          <i className="bi bi-people fs-2 text-warning mb-2"></i>
          <h4 className="fw-bold mb-1">1,250</h4>
          <p className="mb-0 text-muted">Verified Users</p>
        </div>
      </div>
    </div>
  );
}
