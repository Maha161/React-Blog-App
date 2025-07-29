export default function About() {
  return (
    <>
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="text-center mb-5">
            <h1 className="fw-light display-5 mb-3">About Our Blog</h1>
            <p className="lead text-muted">
              Discover the story behind our React-focused publication
            </p>
          </div>
          
          <div className="card border-0 shadow-sm mb-5">
            <div className="card-body p-5">
              <p className="lead text-secondary mb-4">
                Welcome to our React blog! This application was built to demonstrate modern React concepts 
                including React Router, hooks, and component-based architecture.
              </p>
              
              <p className="text-secondary mb-4">
                Our mission is to provide high-quality content about React development, best practices, 
                and the latest trends in the ecosystem. We believe in learning through practical examples
                and sharing knowledge with the community.
              </p>
              
              <div className="mt-5">
                <h4 className="h5 mb-4 text-uppercase fw-normal text-muted">Key Features</h4>
                <div className="row g-4">
                  <div className="col-md-6">
                    <div className="d-flex">
                      <div className="me-3 text-primary">
                        <i className="bi bi-router fs-4"></i>
                      </div>
                      <div>
                        <h5 className="h6 mb-2">React Router</h5>
                        <p className="small text-secondary mb-0">
                          Seamless navigation with nested routes and dynamic parameters
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="d-flex">
                      <div className="me-3 text-primary">
                        <i className="bi bi-gear fs-4"></i>
                      </div>
                      <div>
                        <h5 className="h6 mb-2">Hooks-Based</h5>
                        <p className="small text-secondary mb-0">
                          Modern React implementation using useState, useEffect, and more
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="d-flex">
                      <div className="me-3 text-primary">
                        <i className="bi bi-phone fs-4"></i>
                      </div>
                      <div>
                        <h5 className="h6 mb-2">Responsive Design</h5>
                        <p className="small text-secondary mb-0">
                          Fully responsive layout that works on all devices
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="d-flex">
                      <div className="me-3 text-primary">
                        <i className="bi bi-layers fs-4"></i>
                      </div>
                      <div>
                        <h5 className="h6 mb-2">Component Architecture</h5>
                        <p className="small text-secondary mb-0">
                          Clean, reusable components with proper separation of concerns
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}