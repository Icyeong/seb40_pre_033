import React, { Component } from 'react';

class RichTextEditor extends Component {
  componentDidMount() {
    this.onEdit();
  }

  onEdit() {
    $('.rte').summernote({
      height: 400,
      dialogsInBody: true,
      toolbar: [
        ['style', ['style']],
        ['font', ['bold', 'underline', 'italic']],
        ['fontname', ['fontname', 'fontsize', 'color']],
        ['para', ['ul', 'ol', 'paragraph']],
        ['table', ['table']],
        ['view', ['fullscreen']],
      ],
      callbacks: {
        onChange: function (contents, $editable) {
          console.log('onChange:', contents);
        }
      },
      hint: {
        match: /\b(\w{1,})$/,
        search: function (keyword, callback) {
          callback(
            Object.keys(data).filter(function (item) {
              return item.indexOf(keyword) === 0;
            })
          );
        },
        template: function (item) {
          var content = data[item];
          return '<img src="' + content + '" width="20" /> ' + item;
        },
        content: function (item) {
          var url = data[item];
          if (url) {
            return $("<section/>").html(
              '<div> <img src="' + url + '" width="20" /> </div>'
            )[0];
          }
          return "";
        }
      }
    });
  }

  onDisplay(e) {
    var markup = $(".rte").summernote("code");
    console.log(markup);
    $(".rte").summernote("destroy");
  }

  render() {
    if (this.props.edit) this.onEdit();
    else this.onDisplay();

    return (
      <div>
        <div className="rte"></div>
      </div>
    );
  }
}

export default RichTextEditor;
