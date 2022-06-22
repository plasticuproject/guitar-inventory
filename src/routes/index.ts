import * as express from 'express'

export const register = (app: express.Application) => {
  const oidc = app.locals.oidc

  // Define a route handler for the default home page
  app.get('/', (req: any, res) => {
    res.render('index')
  })

  // Define a secure route handler for the login page that redirects to /guitars
  app.get('/login', oidc.ensureAuthenticated(), (req: any, res) => {
    res.redirect('guitars')
  })

  // Define a route to handle logout
  app.get('/logout', (req: any, res) => {
    req.logout()
    res.redirect('/')
  })

  // Define a secure route handler for the guitars page
  app.get('/guitars', oidc.ensureAuthenticated(), (req: any, res) => {
    res.render('guitars')
  })
}