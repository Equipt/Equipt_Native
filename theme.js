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
    padding: 17
  },
  header: {
    fontSize: 20,
    marginBottom: 20,
    color: '#333'
  },
  formField: {
    borderWidth: 1,
    borderColor: '#DBDBDB',
    width: '100%',
    padding: 20,
    marginBottom: 20,
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
  },
  errorText: {
    width: '100%',
    minHeight: 10,
    textAlign: 'left',
    color: '#a94442'
  },
  starContainer: {
    width: 100,
    marginTop: 5
  }
}

export default theme;
