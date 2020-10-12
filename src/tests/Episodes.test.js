import React from 'react'
import { fireEvent, render, screen, waitFor } from '@testing-library/react'

import Episodes from '../components/Episodes'

describe('App Tests', () => {
    test('renders without error', () => {
        render(<Episodes episodes={[]}/>)
    })
})