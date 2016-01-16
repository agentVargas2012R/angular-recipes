Problem: You want to share data between controllers

Solution: Create a service that shares data between two controllers.

- Create two controllers

- Each controller should call the common service and have that injected into itself

- Create a factory service.

- Add the ability for the controllers to subscribe to event changes on the service so that each can update thier bindings.


