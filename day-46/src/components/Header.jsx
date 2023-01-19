export default function (props) {
  return (
    <div className="ui menu">
      <div className="right menu">
        <a className="item active">
          <div className="ui simple dropdown item">
            <i className="heart icon ">{props.wishlist.length}</i>
            <div className="menu">
              {props.wishlist.map((w) => {
                return (
                  <div className="item">
                    {w.name}
                    <button
                      className="ui button"
                      onClick={() => {
                        console.log('removed from wishlist')
                        console.log(w.id)
                        props.setWishlist(
                          props.wishlist.filter((wish) => wish.id !== w.id)
                        );
                      }}
                    >
                      <i className="close icon"></i>
                    </button>
                  </div>
                );
              })}
            </div>
            <i className="dropdown icon"></i>
          </div>
        </a>
        <a className="item">
          <i className="shopping basket icon"></i>
        </a>
      </div>
    </div>
  );
}
