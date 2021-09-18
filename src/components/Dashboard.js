import React, { useState } from 'react'
import { Card, Button, Alert } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { useHistory } from "react-router-dom"
import PrivateRoute from "./PrivateRoute"

export default function Dashboard() {
  const [error, setError] = useState()
  const {currentUser, logout} = useAuth()
  const history = useHistory()

  async function handleLogout() {
    setError("")

    try {
      await logout()
      history.push("/login")
    } catch {
      setError("Failed to log out")
    }
  }

  return (
    <Card>
    <Card.Body> 
      <h2>Profile</h2>
      {error && <Alert variant="danger">{error}</Alert>}
      <div>Email: {currentUser.email}</div>
        <Button onClick={handleLogout} variant="primary">
          Log Out
        </Button>
    </Card.Body>
  </Card>
  )
}
