/// <reference types="react-scripts" />

declare namespace React {
    interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
        // extends React's HTMLAttributes
        name?: string;
    }
}