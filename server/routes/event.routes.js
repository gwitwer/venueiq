import * as EventController from '../controllers/event.controller';

/**
 * Make routes for event
 * @param router
 * @returns void
 */
const eventRoutes = router => {
  // Get all Events
  router.get('/events', EventController.getEvents);

  // // Add a new Event
  // router.post('/events', EventController.addEvent);

  // Get a particular event by cuid
  router.get('/events/:cuid', EventController.getEvent);

  // Update a particular event
  router.post('/events/:cuid', EventController.updateEvent);

  // // Delete a event by cuid
  // router.delete('/events/:cuid', EventController.deleteEvent);
};

export default eventRoutes;
