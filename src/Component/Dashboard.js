import Card from "./Card";
function Dashboard() {
  let CardData = [
    {
      Earnings: "Earnings(Monthly)",
      Value: "$40,000",
      icon: "fa-calendar",
      progressbar: false,
    },
    {
      Earnings: "Earnings(Annual)",
      Value: "$215,000",
      icon: "fa-dollar-sign",
      progressbar: false,
    },
    {
      Earnings: "Tasks",
      Value: "10%",
      icon: "fa-clipboard-list",
      progressbar: false,
    },
    {
      Earnings: "Pending Requests",
      Value: "18",
      icon: "fa-comments",
      progressbar: false,
    },
  ];

  return (
    <>
      <div className="container-fluid">
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
          <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
          <a
            href="#"
            className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
          >
            <i className="fas fa-download fa-sm text-white-50"></i> Generate
            Report
          </a>
        </div>
        <div className="row">
          {CardData.map((obj) => {
            return <Card data={obj}></Card>;
          })}
        </div>
      </div>
    </>
  );
}

export default Dashboard;
