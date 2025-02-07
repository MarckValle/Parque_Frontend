const Table = ({ title }) => {
    const data = [
      { name: "Home Decor Range", popularity: "45%", visits: 200 },
      { name: "Disney Princess Pink Bag", popularity: "25%", visits: 100 },
      { name: "Bathroom Essentials", popularity: "18%", visits: 80 },
      { name: "Apple Smartwatches", popularity: "12%", visits: 50 },
    ];
  
    return (
      <div className="table">
        <h4>{title}</h4>
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Nombre</th>
              <th>Popularidad</th>
              <th>Visitas</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{row.name}</td>
                <td>{row.popularity}</td>
                <td>{row.visits}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  
  export default Table;
  