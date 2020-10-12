import React from 'react'
import { fireEvent, render, screen, waitFor } from '@testing-library/react'

import App from '../App'

describe('App Tests', () => {
    test('renders without error', () => {
        render(<App />)
    })
})