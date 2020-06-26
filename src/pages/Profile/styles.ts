import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  /* align-items: center; */
  /* justify-content: center; */

  padding: 0 30px 0px 30px;
  /* padding: 0px; */
`;

export const Title = styled.Text`
  font-size: 20px;
  color: #f4ede8;
  font-family: 'RobotoSlab-Medium';
  margin: 24px 0 24px;
`;

export const BackButton = styled.TouchableOpacity`
  margin-top: 35px;
  width: 25px;
  height: 25px;
`;

export const LogoutButton = styled.TouchableOpacity`
  position: absolute;
  top: 35px;
  right: 25px;

`;

export const UserAvatarButton = styled.TouchableOpacity`
  width: 150px;
  height: 150px;
  border-radius: 75px;

  align-items: center;
  justify-content: center;
  align-self: center;
  margin-top: -15px;
`;

export const UserAvatar = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: 75px;
  /* width: 150px;
  height: 150px;

  /* margin-top: 30px; */
  /* align-self: center; */
  border-width: 5px;
  border-color: #ff9000;
`;
