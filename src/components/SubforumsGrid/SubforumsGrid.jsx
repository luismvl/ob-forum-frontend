import React, { useEffect, useState } from 'react'
import axios from 'axios'
import styled from 'styled-components/macro'
import { useParams } from 'react-router-dom'
import { FastAverageColor } from 'fast-average-color'
import { BiUserCheck, BiSearch, BiSortDown, BiChevronDown } from 'react-icons/bi'
import Color from 'color'
import { useAuth } from '../../hooks/useAuth'
import Button from '../Button'
import Divider from '../Divider'
import Input from '../Input'

function SubforumsGrid() {
  const [course, setCourse] = useState({})
  const [subforums, setSubforums] = useState([])
  const [bgColor, setBgColor] = useState('lightgrey')

  const params = useParams()
  const { auth } = useAuth()

  useEffect(() => {
    const fac = new FastAverageColor()
    fac
      .getColorAsync(course.iconUrl, { algorithm: 'simple' })
      .then((color) => {
        const first = Color(color.hex).saturate(0.35).hex()
        const second = Color(color.hex).rotate(-10).saturate(0.3).hex()
        const third = Color(color.hex).rotate(-20).saturate(0.3).hex()
        const gradient = `linear-gradient(91.73deg, ${first} 0%, ${second} 50%, ${third} 100%);`
        setBgColor(gradient)
      })
      .catch(() => {})
  }, [course])

  // Get info for current course
  useEffect(() => {
    axios
      .get(`https://ob-forum-backend.herokuapp.com/courses/${params.courseId}`, {
        headers: {
          Authorization: `Bearer ${auth.token}`,
        },
      })
      .then((res) => {
        setCourse(res.data)
      })
  }, [params])

  // Get all subforums from courseId
  useEffect(() => {
    axios
      .get(`https://ob-forum-backend.herokuapp.com/subforums?courseId=${params.courseId}`, {
        headers: {
          Authorization: `Bearer ${auth.token}`,
        },
      })
      .then((res) => {
        setSubforums(res.data)
      })
  }, [course])

  return (
    <div>
      <Header bgColor={bgColor}>
        <Content>
          <TitleBox>
            <div className="course-icon">
              <img src={course.iconUrl} alt="Course icon" />
            </div>
            <h2>{course.name}</h2>
            <Button leftIcon={<BiUserCheck />} variant="colorShaded" label="Siguiendo" />
          </TitleBox>
          <Divider />
          <SearchOrderBox>
            <Input outlined placeholder="Buscar temas" leftIcon={<BiSearch />} />
            <Button
              color="grey"
              variant="outlined"
              leftIcon={<BiSortDown />}
              rightIcon={<BiChevronDown />}
              label="Ordenar por"
            />
          </SearchOrderBox>
        </Content>
      </Header>
      <div>
        <h2>CURSO: {course.name}</h2>
        <ul>
          {subforums.map((sf) => (
            <li key={sf.id}>{sf.name}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

const Header = styled.div`
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.greys.grey3};
  background: ${({ bgColor }) => bgColor};
  padding-top: 85px;
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  background-color: ${({ theme }) => theme.greys.white};
  border-radius: 12px;
  padding: 0px 24px 20px 24px;
`
const TitleBox = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 24px;
  height: 60px;

  & > .course-icon {
    height: 90px;
    aspect-ratio: 1;
    border: 4px solid ${({ theme }) => theme.greys.grey3};
    border-radius: 20px;
    padding: 10px;
    background-color: ${({ theme }) => theme.greys.white};
  }

  & > h2 {
    font-family: Inter, sans-serif;
    font-weight: 700;
    flex-grow: 1;
  }
`
const SearchOrderBox = styled.div`
  display: flex;
  gap: 14px;
  flex-direction: row;
  flex-wrap: nowrap;
`

export default SubforumsGrid
