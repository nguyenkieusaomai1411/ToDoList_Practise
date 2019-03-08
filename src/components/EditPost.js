import React, { Component } from 'react';
import PropTypes from 'prop-types';

class EditPost extends Component {
    static propTypes = {
        post: PropTypes.shape({
            id: PropTypes.number,
            title: PropTypes.string,
            content: PropTypes.string
        }).isRequired,
        updatePost: PropTypes.func.isRequired
    };
    
    render() {
        return (
            <div>
                <form onSubmit={ this.handleEdit }>
                    <input required type="text" 
                        ref={ (input) => this.getTitle = input }
                        defaultValue={ this.props.post.title }
                        placeholder="Mời nhập tên sản phẩm" />
                    <br />
                    <input required rows="5" cols="30"
                        ref={ (input) => this.getContent = input }
                        defaultValue={ this.props.post.content }
                        placeholder="Mời nhập số lượng" />
                    <br />
                    <button>
                        Edit
                    </button>
                </form>
            </div>
        );
    }

    handleEdit = (e) => {
        e.preventDefault();
        const id = this.props.post.id;
        const newTitle = this.getTitle.value;
        const newContent = this.getContent.value;
        this.props.updatePost(id, newTitle, newContent);
    }
}

export default EditPost;