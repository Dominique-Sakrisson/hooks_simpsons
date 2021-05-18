import React from 'react'
import { fireEvent, render, screen, waitFor} from '@testing-library/react'
import {rest} from 'msw'
import {setupServer} from 'msw/node';
import SimpsonsQuote from './SimpsonsQuote'

const server = setupServer(
    rest.get('https://thesimpsonsquoteapi.glitch.me/quotes', (req,res,ctx) => {
        return res(ctx.json([
            {
                quote: "I hope I didn't brain my damage.",
                character: "Homer Simpson",
                image: "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939",
            }
        ]))
    })
)

describe('tests the simpsonsQuote container', () => {
    beforeAll(() => server.listen());
    afterAll(() => server.close());
    it('tests for img, text, character returned and displays to page', () => {
        render(<SimpsonsQuote />)
        screen.getByText('Generate Simpson');
        const button = screen.getByRole('button' )
        fireEvent.click(button);

        return waitFor(() => {
            screen.getByAltText('Homer Simpson');
            screen.getByText('I hope I didn\'t brain my damage.')
        })
    })
})
