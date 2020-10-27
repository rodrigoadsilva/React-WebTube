import React, {Component} from 'react';
import { Segment, Input} from 'semantic-ui-react';

class SearchBar extends Component {

    searchTerm = e => {
        if(e.keyCode === 13){
            const term = e.target.value;
            console.log(term)
        }
    }
    render(){
        return (
            <div className='search-bar'>
                <Segment stacked>
                    <Input icon='search' size='large' placeholder='Search...' onKeyDown={(e) => this.searchTerm(e)}/>
                </Segment>
            </div>
        );
    }
}

export default SearchBar