const actions = {
  ageSync (context) {
    setTimeout(() => {
      context.commit('AGE_ADD')
    }, 2000)
  }
}

export default actions
