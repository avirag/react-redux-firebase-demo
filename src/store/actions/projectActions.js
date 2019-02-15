export const createProject = project => {
  return (dispatch, getState, {getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    const profile = getState().fb.profile;
    const authorId = getState().fb.auth.uid;
    firestore.collection('projects').add({
      ...project,
      authorFirstName: profile.firstName,
      authorLastName: profile.lastName,
      authorId: authorId,
      createdAt: new Date()
    }).then(() => {
      dispatch({
        type: 'CREATE_PROJECT',
        project
      });
    }).catch(error => {
      dispatch('CREATE_PROJECT_ERROR', error);
    });
  };
}