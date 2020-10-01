import React from "react";
import "./custom-select.styles.css";

class CustomSelect extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      defaultSelectText: "",
      showOptionList: false,
      optionsList: []
    };
  }

  componentDidMount() {
    // Add Event Listner to handle the click that happens outside
    // the Custom Select Container
    document.addEventListener("mousedown", this.handleClickOutside);
    this.setState({
      defaultSelectText: this.props.defaultText
    });
  }

  componentWillUnmount() {
    // Remove the event listner on component unmounting
    document.removeEventListener("mousedown", this.handleClickOutside);
  }

  // This method handles the click that happens outside the
  // select text and list area
  handleClickOutside = (e) => {
    if (
      !e.target.classList.contains("custom-select-option") &&
      !e.target.classList.contains("selected-txt")
    ) {
      this.setState({
        showOptionList: false
      });
    }
  };

  // This method handles the display of option list
  handleListDisplay = () => {
    this.setState((prevState) => {
      return {
        showOptionList: !prevState.showOptionList
      };
    });
  };

  // This method handles the setting of name in select text area
  // and list display on selection
  handleOptionClick = (e) => {
    const { name, handleSelect } = this.props;
    const value = e.target.getAttribute("data-name");
    this.setState({
      defaultSelectText: e.target.getAttribute("data-name"),
      showOptionList: false
    });

    handleSelect(name, value);
  };

  render() {
    const { optionsList } = this.props;
    const { showOptionList, defaultSelectText } = this.state;
    return (
      <div className="custom-s-container">
        <div
          className={showOptionList ? "selected-txt active" : "selected-txt"}
          onClick={this.handleListDisplay}
        >
          {defaultSelectText}
        </div>
        {showOptionList && (
          <span className="custom-s-ul">
            <ul className="select-optns">
              {optionsList.map((option) => {
                return (
                  <li
                    className="custom-select-option"
                    data-name={option.name}
                    key={option.id}
                    onClick={this.handleOptionClick}
                  >
                    {option.name}
                  </li>
                );
              })}
            </ul>
          </span>
        )}
      </div>
    );
  }
}

export default CustomSelect;
