const SectionMovies = ({ titleSection, nameSection, menu, menu2, cardMovie }) => {
  return (
    <section className={`${nameSection} section row align-items-center align-content-center`}>
      <h2 className="categoryMovie col-12 col-sm-4">{titleSection}</h2>
      <div className="movies--container col-12 col-sm-8">
        <div className="container--movies--header row">
          <div className="col-8 col-md-6 row menu-left">{menu}</div>
          <div className="col-4 col-md-4 menu-right">{menu2}</div>
        </div>
        <div className="container--card row align-items-center justify-content-between">
          {cardMovie}
        </div>
      </div>
    </section>
  );
};
export default SectionMovies;
