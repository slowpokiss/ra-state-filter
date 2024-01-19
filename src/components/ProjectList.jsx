export default function ProjectList({ projects }) {
  return (
    <>
      <div className="projects-area">
        <div className="projects">
        {projects.map((el,ind) => {
            return <img src={el.img} key={ind} className="project"/>
          })}
        </div>
      </div>
    </>
  );
}
