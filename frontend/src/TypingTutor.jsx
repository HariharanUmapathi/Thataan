import { Component } from "react";
import KeyBoardv2 from "./KeyBoardv2";
import "./TypingTutor.css";
import FingerPositioning from "./Fingering.jsx";
import ScoreBoard from "./Scoreboard.jsx";

class TypingTutor extends Component {
  constructor() {
    super();
    this.handleInputChangeUserTypedText =
      this.handleInputChangeUserTypedText.bind(this);
    this.handleOnKeyDown = this.handleOnKeyDown.bind(this);
    this.handleLevelChange = this.handleLevelChange.bind(this);
    this.state = {
      practiseText: "",
      userTypedText: "",
      level: "",
      practiseTextHighlighted: [],
    };
    this.compareIndex = -1;
    this.practiseData = [];
    this.currentPractiseLine = 0;
    this.customLayout = null;
  }
  getKeystroketoCharacter(keyboardSequence) {}
  getKeystrokeSequence(tamilText) {
    if (this.customLayout != null)
      return this.customLayout.getKeystrokeSequence(tamilText);
    return "";
  }
  componentDidMount() {
    this.customLayout = new Tamil99KeyboardLayout();
  }

  handleInputChangeUserTypedText(e) {
    let userTypedTextInput = e.target.value;
    this.setState({ userTypedText: userTypedTextInput });
  }

  handleLevelChange(e) {
    this.compareIndex = -1;

    let userInput = e.target.value;
    this.setState({ level: userInput });
    document.getElementById("userText").focus();
    let fetchUrl =
      `${import.meta.env.BASE_URL}/data/level_` + e.target.value + ".json";
    fetch(fetchUrl, {
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((responseJson) => {
        this.practiseData = responseJson["exercises"];
        console.log(this.practiseData);
        return this.practiseData;
      })
      .then((practiseData) =>
        this.setState({
          practiseText: practiseData[0],
          userTypedText: "",
          practiseTextHighlighted: this.greyOutString(practiseData[0]),
        }),
      )
      .catch((error) => console.log(error));
  }

  handleOnKeyDown(e) {
    if (this.state.level === "") {
      alert("Choose a level");
      document.getElementById("level-selector").focus();
    }

    if (e.keyCode === 8) {
      //condition to check if the input is backspace and prevent it
      e.preventDefault();
      return;
    }
    let userTypedTextInput = e.target.value;

    this.setState({ userTypedText: userTypedTextInput });
    let practiseText = this.state.practiseText;
    this.compareIndex = userTypedTextInput.length - 1;
    this.highlightTypedLetters(
      this.compareIndex,
      userTypedTextInput,
      this.state.practiseText,
    );

    if (this.isEndOfPractiseText(userTypedTextInput, this.state.practiseText)) {
      this.currentPractiseLine += 1;
      this.setState({
        practiseText: this.practiseData[this.currentPractiseLine],
        userTypedText: "",
        practiseTextHighlighted: this.greyOutString(
          this.practiseData[this.currentPractiseLine],
        ),
      });
      this.compareIndex = -1;
    }
  }

  isEndOfPractiseText(userTypedText, practiseText) {
    if (userTypedText.length === practiseText.length) {
      return true;
    } else {
      return false;
    }
  }

  greyOutString(stringToBeGreyed) {
    if (stringToBeGreyed != null) {
      let arrayOfGreyedCharacters = stringToBeGreyed
        .split("")
        .map((character) => {
          return <span style={{ color: "grey" }}> {character} </span>;
        });
      return arrayOfGreyedCharacters;
    }
    return [];
  }

  highlightTypedLetters(compareIndex, userTypedText, practiseText) {
    let practiseCharactersArray = this.state.practiseTextHighlighted;
    practiseCharactersArray[compareIndex + 2] = (
      <span style={{ color: "slateblue" }}>
        {" "}
        {this.state.practiseText[compareIndex + 2]}{" "}
      </span>
    );
    practiseCharactersArray[compareIndex + 1] = (
      <span style={{ backgroundColor: "yellow" }}>
        {" "}
        {this.state.practiseText[compareIndex + 1]}{" "}
      </span>
    );
    if (this.state.practiseText[compareIndex] !== userTypedText[compareIndex]) {
      practiseCharactersArray[compareIndex] = (
        <span style={{ color: "red" }}>
          {" "}
          {this.state.practiseText[compareIndex]}{" "}
        </span>
      );
    } else {
      practiseCharactersArray[compareIndex] = (
        <span style={{ color: "gcblack" }}>
          {" "}
          {this.state.practiseText[compareIndex]}{" "}
        </span>
      );
    }
    if (
      this.state.practiseText[compareIndex - 1] !==
      userTypedText[compareIndex - 1]
    ) {
      practiseCharactersArray[compareIndex - 1] = (
        <span style={{ color: "red" }}>
          {" "}
          {this.state.practiseText[compareIndex - 1]}{" "}
        </span>
      );
    } else {
      practiseCharactersArray[compareIndex - 1] = (
        <span style={{ color: "black" }}>
          {" "}
          {this.state.practiseText[compareIndex - 1]}{" "}
        </span>
      );
    }
    this.setState({ practiseTextHighlighted: practiseCharactersArray });
  }

  render() {
    let nextCharacter =
      this.state.practiseText[this.compareIndex + 1] === " "
        ? "<space>"
        : this.state.practiseText[this.compareIndex + 1];
    let nextSequence = this.getKeystrokeSequence(this.state.practiseText);
    if (nextSequence != "") {
      console.log(nextCharacter);
    }
    return (
      <div id="typingTutor">
        <div className="lvwpr">
          <label> Level </label>
          <select
            id="level-selector"
            value={this.state.level}
            onChange={this.handleLevelChange}
          >
            <option value="" disabled defaultValue>
              select a level to begin
            </option>
            <option value="1"> level 1</option>
            <option value="2"> level 2</option>
            <option value="3"> level 3</option>
            <option value="4">level 4</option>
          </select>
        </div>
        <ScoreBoard
          userInput={this.state.leveluserTypedText}
          practiseText={this.state.practiseText}
        />
        <div id="userTextDiv">
          <label> Practise Text: </label>
          <div style={{ fontSize: "2rem" }}>
            {this.state.practiseTextHighlighted}
          </div>
          <div className="practiseTextUnrenderedDiv">
            <div id="practiseTextUnrendered">{nextCharacter}</div>
          </div>
          <div className="practiseTextRenderedDiv">
            <div id="practiseTextRendered">{this.state.practiseText}</div>
          </div>
          <div>{}</div>
          <input
            placeholder="Type Here"
            id="userText"
            type="text"
            name="userTypedText"
            value={this.state.userTypedText}
            onChange={this.handleInputChangeUserTypedText}
            onKeyDown={this.handleOnKeyDown}
          />
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <FingerPositioning nextCharacter={nextCharacter} />

          <KeyBoardv2
            pressedKey={
              this.state.practiseText[this.state.userTypedText.length]
            }
          />
        </div>
      </div>
    );
  }
}

export default <TypingTutor />;
