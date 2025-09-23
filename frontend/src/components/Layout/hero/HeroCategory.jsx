//
import categories from "../../../assets/data/categories.json";
//
export default function HeroCategories({ onCategoryClick }) {
  return (
    <div
      class="row g-2 justify-content-center py-3 my-4 rounded-4"
      style={{
        background:
          "linear-gradient(90deg, rgba(23,162,184,0.1), rgba(23,162,184,0.3))",
      }}
    >
      {categories.categories.map((cat, idx) => (
        <div key={idx} className="col-auto">
          <div
            className="d-flex align-items-center p-2 rounded category-badge"
            style={{
              cursor: "pointer",
              backgroundColor: "rgba(10, 25, 47, 0.85)",
              border: "1px solid rgba(100, 255, 218, 0.3)",
              borderRadius: "6px",
              boxShadow: "0 2px 8px rgba(0, 0, 0, 0.3)",
              transition: "all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1)",
              fontFamily: "'SF Mono', 'Fira Code', monospace",
            }}
            onClick={() => onCategoryClick(cat.name)}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "rgba(15, 35, 60, 0.95)";
              e.currentTarget.style.borderColor = "rgba(100, 255, 218, 0.7)";
              e.currentTarget.style.boxShadow =
                "0 4px 12px rgba(100, 255, 218, 0.2)";
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "rgba(10, 25, 47, 0.85)";
              e.currentTarget.style.borderColor = "rgba(100, 255, 218, 0.3)";
              e.currentTarget.style.boxShadow = "0 2px 8px rgba(0, 0, 0, 0.3)";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            <i
              className={`${cat.icon} me-2`}
              style={{
                fontSize: "1.1rem",
                color: "#198754",
                filter: "drop-shadow(0 0 2px #01180eff)",
              }}
            ></i>
            <span
              className="fw-semibold small"
              style={{
                color: "#ccd6f6",
                letterSpacing: "0.5px",
              }}
            >
              {cat.name}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
