import React from 'react'
import Lottie from 'lottie-react'
import load from './Lottiefiles/load.json'
import error from './Lottiefiles/error.json'
import { useNavigate } from 'react-router-dom'

export default function Lottiehandler({ type }) {
  const navigate = useNavigate();

  if (type === 'load') {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{height: '60vh'}}>
        <Lottie animationData={load} style={{width: 200}} />
      </div>
    )
  }

  if (type === 'error') {
    return (
      <div className="d-flex flex-column justify-content-center align-items-center" style={{height: '60vh'}}>
        <Lottie animationData={error} style={{width: 250}} />
        <h2 className="text-danger my-3"> Error Page Not Found</h2>
        <button className="btn btn-primary" onClick={() => navigate('/')}>
          Back To Home
        </button>
      </div>
    )
  }

  return null;
}