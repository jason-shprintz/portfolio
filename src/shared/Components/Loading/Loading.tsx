import * as S from "./styles";
import * as SharedS from "../../styles";
import type { JSX } from "react";

/**
 * A simple loading indicator component.
 *
 * Renders a spinner and a "Loading..." message centered in a flex column layout.
 * Useful for displaying a loading state while asynchronous content is being fetched or processed.
 *
 * @returns {JSX.Element} The loading indicator UI.
 */
const Loading = (): JSX.Element => {
  return (
    <SharedS.FlexCol>
      <S.SpinnerWrapper>
        <S.Spinner />
        <span>Loading...</span>
      </S.SpinnerWrapper>
    </SharedS.FlexCol>
  );
};

export default Loading;
