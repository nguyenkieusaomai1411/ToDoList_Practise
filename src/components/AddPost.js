import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PostForm extends Component {
    static propTypes = {
        addPost: PropTypes.func.isRequired
    }

    render() {
        return (
            <div >
                <h1>
                    Nhập sản phẩm mới:
                </h1>
                <form onSubmit={ this.handleSubmit } style={createStyle}>
                    <input required type="text" placeholder="Mời nhập tên sản phẩm" ref={ (input) => this.getTitle = input } style={formStyle}/>
                    <br /><br />
                    <input required rows="3" cols="30" placeholder="Mời nhập số lượng" ref={ (input) => this.getContent = input } style={formStyle} />
                    <br /><br />
                    <button>
                        Create
                    </button>
                </form>
            </div>
        );
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const title = this.getTitle.value;
        const content = this.getContent.value;
        this.props.addPost(title, content);
        this.getTitle.value = '';
        this.getContent.value = '';
    }
}
//style--------------------------------------------
const createStyle={
    display:'inline-flex'
};
const formStyle={
    boderRadious:'12px',
    marginRight:'10px'
}
export default PostForm;