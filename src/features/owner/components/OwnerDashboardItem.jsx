function OwnerDashboardItem({ label, IconComponent }) {
  return (
    <div className="card">
      <div className="card__content">
        <div className="card-icon-wrapper">
          <IconComponent className="card-icon-wrapper__icon" />
        </div>
        <div className="card-info">
          <span>{label}</span>
          <span>3</span>
        </div>
      </div>
    </div>
  );
}

export default OwnerDashboardItem;
