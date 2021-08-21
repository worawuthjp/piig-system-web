import MyButton from 'components/MyButton';
import MyCard from 'components/MyCard';
import PiiGLogo from 'components/PiiGLogo';
import React from 'react';
import { Container, Form, Row } from 'react-bootstrap';
import RegisterStyle from './styled';

export default function Register() {
  return (
    <RegisterStyle>
      <Container>
        <Row className="mt-5">
          <PiiGLogo className="ml-auto mr-auto" />
        </Row>

        <Row className="header">Create Member Account</Row>

        <Row>
          <MyCard className="ml-auto mr-auto col-md-5 col-sm-10 col-xs-10 p-3">
            <Form>
              <Form.Group controlId="usernameForm">
                <Form.Label>ชื่อจริง</Form.Label>
                <Form.Control type="text" placeholder="first name" />
                <Form.Text className="text-mute error-msg">firstname is required</Form.Text>
              </Form.Group>

              <Form.Group controlId="passwordForm">
                <Form.Label>นามสกุล</Form.Label>
                <Form.Control type="text" placeholder="last name" />
                <Form.Text className="text-mute error-msg">lastname is required</Form.Text>
              </Form.Group>

              <Form.Group controlId="passwordForm">
                <Form.Label>ชื่อผู้ใช้</Form.Label>
                <Form.Control type="text" placeholder="last name" />
                <Form.Text className="text-mute error-msg">username is required</Form.Text>
              </Form.Group>

              <Form.Group controlId="passwordForm">
                <Form.Label>รหัสผ่าน</Form.Label>
                <Form.Control type="password" placeholder="password" />
                <Form.Text className="text-mute error-msg">password is required</Form.Text>
              </Form.Group>

              <Form.Group controlId="passwordForm">
                <Form.Label>ยืนยันรหัสผ่าน</Form.Label>
                <Form.Control type="confirm password" placeholder="confirm password" />
                <Form.Text className="text-mute error-msg">confirm password is required</Form.Text>
              </Form.Group>

              <MyButton className="success col-md-12 p-2" type="submit">
                Create
              </MyButton>
            </Form>
          </MyCard>
        </Row>
      </Container>
    </RegisterStyle>
  );
}
