export default function StatsBand({ data }) {
  const { stats } = data;

  return (
    <section className="stats">
      <div className="wrap">
        {stats?.map((s) => (
          <div className="stat" key={s.id}>
            <h3>{s.value}</h3>
            <p>{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
