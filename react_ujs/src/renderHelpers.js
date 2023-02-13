import ReactDOM from "react-dom"
import ReactDOMClient from "react-dom/client"

export function supportsHydration() {
  return typeof ReactDOM.hydrate === "function" || typeof ReactDOM.hydrateRoot === "function"
}

export function reactHydrate(node, component) {
  if (typeof ReactDOM.hydrateRoot === "function") {
    return ReactDOM.hydrateRoot(node, component)
  } else {
    return ReactDOM.hydrate(component, node)
  }
}

export function createReactRootLike(node) {
  return ReactDOMClient.createRoot ? ReactDOMClient.createRoot(node) : legacyReactRootLike(node)
}

function legacyReactRootLike(node) {
  const root = {
    render(component) {
      return ReactDOM.render(component, node)
    }
  }
  return root
}
