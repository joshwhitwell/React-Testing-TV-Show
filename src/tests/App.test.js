import React from 'react'
import { fireEvent, render, screen, waitFor, act } from '@testing-library/react'

import App from '../App'

import mockData from '../dummyData'

import { fetchShow as mockFetchShow } from '../api/fetchShow'

jest.mock('../api/fetchShow')

describe('App Tests', () => {
    test('renders without error', async () => {
        mockFetchShow.mockResolvedValueOnce({
            data: mockData
        })
        const { rerender } = render(<App />)
        await waitFor(() => {})
        rerender(<App />)
    })

    test('displays fetching data message', async () => {
        mockFetchShow.mockResolvedValueOnce({
            data: mockData
        })
        const { rerender } = render(<App />)
        expect(screen.getByText(/fetching data.../i)).not.toBeNull()
        await waitFor(() => {})
        rerender(<App />)
    })

    test('fetches and displays data', async () => {
        mockFetchShow.mockResolvedValueOnce({
            data: mockData
        })
        const { rerender } = render(<App />)
        await waitFor(() => { })
        rerender(<App />)
        expect(screen.getByAltText('Stranger Things')).not.toBeNull()

        expect(screen.getAllByText(/Stranger Things/i)).not.toEqual(0)

        expect(screen.getByText(/is set in 1983 Indiana, where a young boy vanishes into thin air. As friends, family and local police search for answers, they are drawn into an extraordinary mystery involving top-secret government experiments, terrifying supernatural forces and one very strange little girl./i)).not.toBeNull()

        expect(screen.getByText(/select a season/i)).not.toBeNull()
    })

    test('can select a season', async () => {
        mockFetchShow.mockResolvedValueOnce({
            data: mockData
        })
        render(<App />)
        await waitFor(() => {})
        const dropdown = screen.getByText(/select a season/i)
        fireEvent.mouseDown(dropdown)
        expect(screen.getByText('Season 1')).not.toBeNull()
        fireEvent.mouseDown(screen.getByText('Season 1'))
        expect(screen.queryByText(/select a season/i)).toBeNull()
    })
})