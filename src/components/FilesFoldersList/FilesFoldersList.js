import React, { Component } from 'react';
import ListElement from './ListView/containers/ListElement';
const serverUrl = "https://drive-js-server2.herokuapp.com/uploads/drive/"
class FilesFoldersList extends Component{
    constructor(props){
        super(props)

        this.state={
            itemClicked:'',
        }
    }

    handleClick = (id) => {
        console.log("item clicked id: " + id)
        this.setState({
            itemClicked:id,
        })
    }
    
    render(){
        const filesandfoldersfiltered = this.props.filesandfolders
        const totalListElements = filesandfoldersfiltered.length
        console.log(filesandfoldersfiltered)
        const listElementComponents = filesandfoldersfiltered.map((filefolder) => (
            <ListElement 
                key={filefolder.id}
                id={filefolder.id}
                icon={filefolder.icon}
                title={filefolder.title}
                linkDetails={serverUrl+filefolder.detailsLink}
                dateCreated={filefolder.dateCreated}
                details={filefolder.details}
                star={filefolder.star}
                deleted={filefolder.deleted}
                itemClicked={this.state.itemClicked}
                fileSystem={filesandfoldersfiltered}
                optionClicked={this.props.optionClicked}
                onClick={this.handleClick}
                onDoubleClick={this.props.onDoubleClickListElement}
                onFormSubmit={this.props.onFormSubmit}
                onListElementDelete={this.props.onListElementDelete}
                onListElementStar={this.props.onListElementStar}
            />
        ));
     

        if (this.props.loading){
            return (
                <div className="col-md-12">
                    <div className="p-3 mb-2 bg-white text-dark font-italic">Loading...</div>
                </div>
            )
        }else if (totalListElements ===0){
            return (
                <div className="col-md-12">
                    <div className="p-3 mb-2 bg-white text-dark font-italic">No elements in the list, add one</div>
                </div>
            )
        }else{
            return (
                <div className="col-md-12">
                    <ul className="list list-group list-attrs">
                        {listElementComponents}
                    </ul>
                </div>
            )
        }
    }
}

export default FilesFoldersList;