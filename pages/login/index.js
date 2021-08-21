import MyButton from 'components/MyButton';
import MyCard from 'components/MyCard';
import PiiGLogo from 'components/PiiGLogo';
import React from 'react';
import Link from 'next/link';
import { Container, Form, Row } from 'react-bootstrap';
import { LoginStyle } from './styled';

export default function Login() {
  return (
    <LoginStyle>
      <Container>
        <Row className="mt-5">
          <PiiGLogo className="ml-auto mr-auto" />
        </Row>

        <Row className="header">เข้าสู่ระบบ</Row>

        <Row>
          <MyCard className="ml-auto mr-auto col-md-5 col-sm-10 col-xs-10 p-3">
            <Form>
              <Form.Group controlId="usernameForm">
                <Form.Label>ชื่อผู้ใช้</Form.Label>
                <Form.Control type="text" placeholder="username" />
                <Form.Text className="text-mute error-msg">username is required</Form.Text>
              </Form.Group>

              <Form.Group controlId="passwordForm">
                <Form.Label>รหัสผ่าน</Form.Label>
                <Form.Control type="password" placeholder="password" />
                <Form.Text className="text-mute error-msg">password is required</Form.Text>
              </Form.Group>

              <MyButton className="success col-md-12 p-2" type="submit">
                เข้าสู่ระบบ
              </MyButton>
            </Form>
          </MyCard>
        </Row>

        <Row className="mt-3">
          <Link href="#">
            <a className="ml-auto mr-auto">ลืมรหัสผ่าน</a>
          </Link>
        </Row>
      </Container>

    </LoginStyle>
  );
}
