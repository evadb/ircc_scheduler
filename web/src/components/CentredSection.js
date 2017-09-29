import styled from 'styled-components'
import PropTypes from 'prop-types'

const CentredSection = styled.section`
  margin-right: auto;
  margin-left: auto;
  width: ${props => (props.width ? props.width : '61%')};
`
CentredSection.propTypes = {
  width: PropTypes.string,
}

export default CentredSection