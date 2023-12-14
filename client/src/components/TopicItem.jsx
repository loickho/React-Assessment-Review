

export default function TopicItem() {
  return (
    <>
    <div className="topic-item">
      <div className="vote">
        <button>up</button>
        0
        <button>down</button>
      </div>
      <div className="text">
        <div className="title">
          How to put a spaceship in orbit
        </div>
        <div className="created">
          CREATED ON <b>23rd Feb</b>
        </div>
      </div>
      <div className="delete">
        <button>Delete</button>
      </div>
    </div>
    </>
  )
}
