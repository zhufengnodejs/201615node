let Pagination = React.createClass({
  getInitialState(){
    return {index:this.props.pageNumber};
  },
  handleClick(event){
    let index = event.target.dataset.index;
    this.setState({index});
  },
  render(){
     let pages = []
     for(let i=1;i<=this.props.totalPages;i++){
        pages.push(<li  className={i==this.state.index?'active':''} key={i}><a data-index={i} href="#">{i}</a></li>);
     }
     return (
       <nav aria-label="Page navigation">
         <ul className="pagination" onClick={this.handleClick}>
           <li>
             <a href="#" aria-label="Previous">
               <span aria-hidden="true">&laquo;</span>
             </a>
           </li>
           {
             pages
           }
           <li>
             <a href="#" aria-label="Next">
               <span aria-hidden="true">&raquo;</span>
             </a>
           </li>
         </ul>
       </nav>
     )
  }
});
ReactDOM.render(<Pagination totalPages={4} pageNumber={3}/>,document.querySelector('#app'));


/*

let Pagination = React.createClass({
  getInitialState(){
    return {index:this.props.pageNumber};
  },
  handleClick(i){
    this.setState({
      index:i
    });
  },
  render(){
    let pages = []
    for(let i=1;i<=this.props.totalPages;i++){
      pages.push(<li onClick={this.handleClick.bind(this,i)} className={i==this.state.index?'active':''} key={i}><a href="#">{i}</a></li>);
    }
    return (
      <nav aria-label="Page navigation">
        <ul className="pagination">
          <li>
            <a href="#" aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
            </a>
          </li>
          {
            pages
          }
          <li>
            <a href="#" aria-label="Next">
              <span aria-hidden="true">&raquo;</span>
            </a>
          </li>
        </ul>
      </nav>
    )
  }
});
ReactDOM.render(<Pagination totalPages={4} pageNumber={3}/>,document.querySelector('#app'));
*/
