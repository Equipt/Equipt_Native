const btn = {
  width: '100%',
  padding: 20,
  color: '#fff',
  fontSize: 20,
  textAlign: 'center'
};

const theme = {
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15
  },
  header: {
    fontSize: 20,
    marginBottom: 20
  },
  formField: {
    borderWidth: 1,
    borderColor: '#DBDBDB',
    width: '100%',
    padding: 20,
    marginBottom: 25,
    fontSize: 16
  },
  btn: btn,
  successBtn: {
    ...btn,
    backgroundColor: '#5C9059'
  },
  deactiveBtn: {
    ...btn,
    backgroundColor: '#5C9059',
    opacity: 0.5
  }

}

export default theme;
