import styled from 'styled-components';

export default {
  Nav: styled.nav`
    background: rgb(0, 0, 255);
    display: flex;
    align-items: center;
    height: 60px;

    ul {
      display: flex;
      padding: 0;
      margin: 0;

      li {
        list-style: none;

        a {
          color: #f1c40f;
          text-decoration: none;
          padding: 1em;

          &:hover {
            color: #f39c12;
          }
        }
      }
    }
  `
};
